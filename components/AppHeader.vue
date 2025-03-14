<template>
  <header :class="cls">
    <div :class="`${cls}_inner`">
      <div :class="`${cls}_left`">
        <NuxtLink :to="getTo('/')">
          <img :class="`${cls}_logo full`" src="/images/logo.png" alt="">
          <img :class="`${cls}_logo small`" src="/images/logo1.png" alt="">
        </NuxtLink>
        <ClientOnly>
          <ul :class="`${cls}_nav`">
            <li v-for="_ in obj.menu" :key="_.label" :class="`${cls}_nav_item`">
              <template v-if="_.children">
                <span class="label">{{ _.label }}
                  <span class="arrow">&#8250;</span>
                </span>
                <ul>
                  <li v-for="item in _.children" :key="item.label">
                    <NuxtLink :to="item.link">{{ item.label }}</NuxtLink>
                  </li>
                </ul>
              </template>
              <template v-else>
                <NuxtLink :to="getTo(_.link)">{{ _.label }}</NuxtLink>
              </template>
            </li>
          </ul>
        </ClientOnly>
      </div>
      <span :class="`${cls}_lang`">
        <a v-if="isEn" @click="switchLang">中</a>
        <span v-else>中</span>
        <span class="fgline">|</span>
        <span v-if="isEn">EN</span>
        <a v-else @click="switchLang">EN</a>
      </span>
    </div>
  </header>
</template>

<script setup>
const cls = 'app-header'
const { langPkg, isEn, switchLang, getTo } = useLangPkg()
const obj = computed(() => langPkg.value.appHeader)
</script>

<style lang="less">
@prefix: app-header;
.@{prefix} {
  padding: 1rem;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, .2), 0 1px 1px rgba(0, 0, 0, .14), 0 1px 3px rgba(0, 0, 0, .12);
  a:not(:hover) {
    color: #171717;
  }
  &_inner {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: auto;
  }
  &_left {
    flex: 1;
    width: 0;
    display: flex;
    align-items: center;
  }
  &_logo {
    height: 2rem;
    &.small {
      display: none;
    }
  }
  &_nav {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    &_item {
      margin: 0 2em;
      position: relative;
      font-size: 1.1rem;
      ul {
        position: absolute;
        top: 2rem;
        left: 50%;
        transform-origin: 0 0;
        transform: translateX(-50%);
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, .12);
        border-radius: 6px;
        transition: transform .2s ease, opacity .2s ease;
        li {
          white-space: nowrap;
          a {
            display: block;
            padding: .8em 1em;
          }
        }
      }
      &:not(:hover) ul {
        opacity: 0;
        transform: translateX(-50%) scaleY(0);
      }
    }
    .label {
      display: inline-flex;
      align-items: center;
    }
    .arrow {
      margin-left: .5rem;
      font-size: 2rem;
      position: relative;
      top: -2px;
      display: inline-block;
      transform: rotate(90deg);
      font-family: 'Courier New', Courier, monospace;
    }
    .router-link-active {
      color: #1857FF !important;
    }
  }
  &_lang {
    .fgline {
      margin: 0 3px;
    }
    span:not(.fgline) {
      color: #FF4800;
    }
  }
  @media screen and (max-width: 750px) {
    .@{prefix} {
      &_logo {
        &.full {
          display: none;
        }
        &.small {
          display: block;
          height: 1.3rem;
        }
      }
      &_nav_item {
        margin: 0 .8rem;
      }
    }
  }
}
</style>
