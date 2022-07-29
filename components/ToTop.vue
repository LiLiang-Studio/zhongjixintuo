<template>
  <div :class="['to-top', { visible }]" @click="toTop">
    <img src="/images/to_top.png" alt="">
  </div>
</template>

<script setup>
const visible = ref(false)
const toTop = () => {
  window.scrollTo(0, 0)
}
const onWinScroll = () => {
  visible.value = window.scrollY > 400
}
onMounted(() => {
  onWinScroll()
  window.addEventListener('scroll', onWinScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onWinScroll)
})
</script>

<style lang="less">
.to-top {
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  background-color: #fff;
  padding: .5rem;
  border-radius: 2rem;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px rgba(0, 0, 0, .14), 0 1px 18px rgba(0, 0, 0, .12);
  transition: transform .2s ease, opacity .2s ease;
  &:active {
    box-shadow: 0 7px 8px -4px rgba(0, 0, 0, .2), 0 12px 17px 2px rgba(0, 0, 0, .14), 0 5px 22px 4px rgba(0, 0, 0, .12);;
  }
  &:not(.visible) {
    opacity: 0;
    transform: scale(0);
  }
  img {
    width: 2rem;
  }
}
</style>
