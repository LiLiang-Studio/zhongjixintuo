<template>
  <footer :class="cls">
    <div :class="`${cls}_inner`">
      <div :class="`${cls}_left`">
        <div :class="`${cls}_logo`">
          <img src="~~/assets/footer_logo.png" alt="footer logo">
        </div>
        <dl :class="`${cls}_info`">
          <dt>tel.</dt>
          <dd>12145121255</dd>
          <dt>add.</dt>
          <dd>{{ $t.value.address }}</dd>
        </dl>
      </div>
      <div :class="`${cls}_right`">
        <ul>
          <li>
            <NuxtLink to="/">{{ $t.value.video }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">{{ $t.value.aiApp }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">{{ $t.value.entEffectiveness }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">{{ $t.value.cooperation }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">{{ $t.value.aboutUs }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">{{ $t.value.TechDoc }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
const cls = 'app-footer'
</script>

<style lang="less">
.app-footer {
  padding: 80px 11.7% 160px;
  background: url("~~/assets/footer_bg.png") no-repeat center center;
  background-size: cover;
  &_inner {
    display: flex;
    align-items: flex-end;
  }
  &_left {
    width: 320px;
    margin-right: 3em;
  }
  &_right {
    flex: 1;
    width: 0;
    a, a:visited {
      color: #fff;
      text-decoration: none;
    }
    li {
      font-size: 20px;
      float: left;
      width: 33.33%;
      text-align: center;
      margin-top: 1.5em;
    }
  }
  &_logo {
    width: 100%;
    padding: 10px;
    margin-bottom: 30px;
    background-color: #fff;
    img {
      display: block;
      width: 100%;
    }
  }
  &_info {
    color: #fff;
    dt {
      text-transform: uppercase;
    }
    dd {
      margin-bottom: 1em;
    }
  }
}
</style>
