<template>
  <footer :class="cls">
    <div :class="`${cls}_inner`">
      <div :class="`${cls}_logo`">
        <img src="~~/assets/footer_logo.png" alt="">
      </div>
      <div :class="`${cls}_box`">
        <div :class="`${cls}_left`">
          <div>
            <img src="~~/assets/phone.png" alt="">
            <span>12145121255</span>
          </div>
          <div>
            <img src="~~/assets/position.png" alt="">
            <span>{{ langPkg.address }}</span>
          </div>
        </div>
        <div :class="`${cls}_right`">
          <ul>
            <li>
              <NuxtLink :to="$getTo('/video')">{{ langPkg.video }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="$getTo('/ai')">{{ langPkg.aiApp }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">{{ langPkg.entEffectiveness }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">{{ langPkg.cooperation }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">{{ langPkg.aboutUs }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">{{ langPkg.TechDoc }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div :class="`${cls}_copyright`">
        Copyright  {{ new Date().getFullYear() }} - 北京中玑信拓科技有限公司  |  京ICP备2022021806号-1
      </div>
    </div>
  </footer>
</template>

<script setup>
const cls = 'app-footer'
const langPkg = useLangPkg()
</script>

<style lang="less">
.app-footer {
  padding: 3rem 10%;
  background: url("~~/assets/footer_bg.png") no-repeat center center;
  background-size: cover;
  color: #fff;
  &_logo {
    text-align: center;
    margin-bottom: 1.5rem;
    img {
      height: 2.4rem;
    }
  }
  &_box {
    border-top: 1px solid rgba(255, 255, 255, .3);
    border-bottom: 1px solid rgba(255, 255, 255, .3);
    display: flex;
    align-items: center;
    padding: 3rem 0;
  }
  &_left {
    max-width: 300px;
    margin-right: 3rem;
    > div {
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    }
    img {
      height: 20px;
      margin-right: .5rem;
    }
  }
  &_right {
    max-width: 300px;
    a, a:visited {
      color: #fff;
    }
    li {
      font-size: 1.2rem;
      float: left;
      text-align: center;
      margin: .5rem 1rem .5rem 0;
    }
  }
  &_copyright {
    color: #fff;
    text-align: center;
    margin-top: 1.2rem;
    font-size: .9rem;
  }
}
</style>
