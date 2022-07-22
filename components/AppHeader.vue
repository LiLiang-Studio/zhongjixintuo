<template>
  <header :class="cls">
    <div :class="`${cls}_inner`">
      <div :class="`${cls}_left`">
        <NuxtLink to="/">
          <img src="~~/assets/logo.png" alt="logo">
        </NuxtLink>
        <ul :class="`${cls}_nav`">
          <li v-for="_ in $t.value.navMenu" :key="_.label" :class="`${cls}_nav_item`">
            <template v-if="_.children">
              <span>{{ _.label }}</span>
              <ul v-if="_.children">
                <li v-for="item in _.children" :key="item.label">
                  <NuxtLink :to="item.link">{{ item.label }}</NuxtLink>
                </li>
              </ul>
            </template>
            <a v-else :href="_.link">{{ _.label }}</a>
          </li>
        </ul>
      </div>
      <div :class="`${cls}_right`">
        <div :class="`${cls}_searchbox`">
          <input class="input">
          <span class="icon"></span>
        </div>
        <span :class="`${cls}_lang`">

          <a v-if="isEn" @click="$switchLang">中</a>
          <span v-else>中</span>
          <span class="fgline">|</span>
          <span v-if="isEn">EN</span>
          <a v-else @click="$switchLang">EN</a>
        </span>
      </div>
    </div>
  </header>
</template>

<script setup>
const cls = 'app-header'
const route = useRoute()
const isEn = computed(() => route.query.lang === 'en')
</script>

<style lang="less">
.app-header {
  padding: 30px 11.7%;
  a:not(:hover) {
    color: #171717;
  }
  &_inner {
    display: flex;
    align-items: center;
  }
  &_left {
    flex: 1;
    width: 0;
    display: flex;
    align-items: center;
  }
  &_nav {
    display: flex;
    align-items: center;
    &_item {
      margin: 0 3em;
    }
  }
  &_right {
    display: flex;
    align-items: center;
  }
  &_searchbox {
    position: relative;
    margin-right: 30px;
    .input {
      width: 226px;
      height: 26px;
      border-radius: 26px;
      padding: 0 46px 0 12px;
      border: none;
      outline: none;
      background-color: #F2F2F2;
    }
    .icon {
      position: absolute;
      top: 50%;
      right: 17px;
      transform: translateY(-50%);
      width: 17px;
      height: 17px;
      background: url("~~/assets/search.png") no-repeat center center;
      background-size: cover;
    }
  }
  &_lang {
    .fgline {
      margin: 0 7px;
    }
    span:not(.fgline) {
      color: #FF4800;
    }
  }
}
</style>
