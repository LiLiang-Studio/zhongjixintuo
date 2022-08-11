<template>
  <footer :class="cls">
    <div :class="`${cls}_inner`">
      <div :class="`${cls}_logo`">
        <img src="/images/footer_logo.png" alt="">
      </div>
      <div :class="`${cls}_box`">
        <div :class="`${cls}_left`">
          <div>
            <img src="/images/email.png" alt="">
            <span>support@zhongjixintuo.com</span>
          </div>
          <div>
            <img src="/images/position.png" alt="">
            <span>{{ obj.address }}</span>
          </div>
        </div>
        <div :class="`${cls}_right`">
          <ClientOnly>
            <ul>
              <li v-for="_ in obj.menu" :key="_.label">
                <NuxtLink :to="getTo(_.link)">{{ _.label }}</NuxtLink>
              </li>
            </ul>
          </ClientOnly>
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
const { langPkg, getTo } = useLangPkg()
const obj = computed(() => langPkg.value.appFooter)
</script>

<style lang="less">
@prefix: app-footer;
.@{prefix} {
  padding: 3rem 1rem;
  background: url("/images/footer_bg.jpg") no-repeat center center;
  background-size: cover;
  color: #fff;
  &_inner {
    max-width: 1200px;
    margin: auto;
  }
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
    @media screen and (max-width: 600px) {
      flex-wrap: wrap;
      padding: 1rem 0;
      .@{prefix} {
        &_left {
          max-width: none;
          margin-right: 0;
          margin-top: 2rem;
          order: 1;
        }
      }
    }
  }
  &_left {
    max-width: 300px;
    margin-right: 3rem;
    > div {
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
    img {
      width: 1.5rem;
      margin-right: .5rem;
    }
  }
  &_right {
    a, a:visited {
      color: #fff;
    }
    ul {
      overflow: hidden;
    }
    li {
      font-size: 1.2rem;
      float: left;
      text-align: center;
      margin: .5rem 2rem .5rem 0;
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
