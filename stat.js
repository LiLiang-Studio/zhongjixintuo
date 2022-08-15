const fs = require('fs')
const path = require('path')

/** @param {{ excludes: string[], extnames: string[] }} param0 */
function stat ({ excludes, extnames }) {
  const defaultExcludes = ['/.git', '/.vscode', 'dist', 'node_modules', 'public', '.nuxt', '.output',  __filename]
  excludes = [...(excludes || []), ...defaultExcludes].map(_ => {
    return _.startsWith('/')
      ? path.resolve(__dirname, _.slice(1))
      : _.replace(/\//gm, path.sep)
  })

  /** @param {string} dir */
  const isExcluded = dir => excludes.some(_ => dir.includes(_))

  /**
   * @param {Object<string, number>} map
   * @param {string} file
   */
  const setCount = (map, file) => {
    const extname = file.split('.').pop()
    const isStat = extnames.includes(extname) && !isExcluded(file)
    if (isStat) {
      const lineCount = fs.readFileSync(file).toString('utf8').trim().split('\n').length
      return {
        ...map,
        all: (map.all || 0) + lineCount,
        [extname]: (map[extname] || 0) + lineCount
      }
    }
    return map
  }

  const mergeCount = (o1, o2) => {
    return Object.keys(o2).reduce((t, k) => {
      return {
        ...t,
        [k]: (t[k] || 0) + o2[k]
      }
    }, o1)
  }

  const reader = parentDir => {
    return fs.readdirSync(parentDir).reduce((t, d) => {
      const dir = path.resolve(parentDir, d)
      const isDir = fs.statSync(dir).isDirectory()
      return isDir
        ? isExcluded(dir)
          ? t
          : mergeCount(t, reader(dir))
        : setCount(t, dir)
    }, {})
  }
  return reader(__dirname)
}

const statMap = stat({
  extnames: ['js', 'css', 'vue']
})

console.log(statMap)
