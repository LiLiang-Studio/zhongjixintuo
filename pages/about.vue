<template>
  <div :class="cls">
    <div :class="`${cls}_banner`">
      <img class="img" src="/images/about/banner.jpg" alt="">
      <div class="box">
        <div>
          <h2 class="title">{{ obj.banner.title }}</h2>
          <p class="desc">{{ obj.banner.desc }}</p>
        </div>
      </div>
    </div>
    <div :class="`${cls}_about`">
      <img class="img" src="/images/about/about.jpg" alt="">
      <div class="box">
        <h2 class="title">{{ obj.about.title }}</h2>
        <p class="desc" v-html="obj.about.desc"></p>
      </div>
    </div>
    <!-- <div :class="`${cls}_form`">
      <div class="inner">
        <h2 class="title">{{ obj.consultForm.title }}</h2>
        <div class="fgline"></div>
        <form class="form">
          <ul>
            <li>
              <label>{{ obj.consultForm.enterpriseField.label }}</label>
              <select class="control">
                <option :value="obj.consultForm.enterpriseField.placeholder" disabled>
                  {{ obj.consultForm.enterpriseField.placeholder }}
                </option>
                <option v-for="_ in obj.consultForm.enterpriseField.options" :key="_" :value="_">{{ _ }}</option>
              </select>
            </li>
            <li>
              <label>{{ obj.consultForm.contactDetails.label }}</label>
              <input class="control" type="text">
            </li>
            <li>
              <label>{{ obj.consultForm.consultationDirection.label }}</label>
              <select class="control">
                <option :value="obj.consultForm.consultationDirection.placeholder" disabled>
                  {{ obj.consultForm.consultationDirection.placeholder }}
                </option>
                <option v-for="_ in obj.consultForm.consultationDirection.options" :key="_" :value="_">{{ _ }}</option>
              </select>
            </li>
            <li>
              <label>{{ obj.consultForm.yourQuestion.label }}</label>
              <textarea class="control" :placeholder="obj.consultForm.yourQuestion.placeholder" cols="30" rows="10"></textarea>
            </li>
          </ul>
          <div class="btns">
            <button>{{ obj.consultForm.submitBtn }}</button>
          </div>
        </form>
      </div>
    </div> -->
  </div>
</template>

<script setup>
const cls = 'page-about'
const { langPkg } = useLangPkg()
const obj = computed(() => langPkg.value.aboutPage)
</script>

<style lang="less">
.page-about {
  &_banner {
    position: relative;
    .img {
      width: 100%;
      max-height: 40rem;
      object-fit: cover;
    }
    .box {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      text-align: center;
    }
    .title {
      font-size: 2.8rem;
      margin-bottom: 1rem;
      font-weight: normal;
    }
    .desc {
      font-size: 1.3rem;
    }
  }
  &_about {
    padding: 3rem 10%;
    display: flex;
    align-items: stretch;
    .img {
      flex: 1;
      width: 0;
      max-width: 30rem;
      object-fit: cover;
    }
    .box {
      width: 50%;
      margin-left: 3rem;
    }
    .title {
      font-size: 2.4rem;
      margin-bottom: 2rem;
    }
    .desc {
      line-height: 1.6;
      font-size: 1.1rem;
    }
    @media screen and (max-width: 750px) {
      padding: 3rem 1rem;
      .img {
        display: none;
      }
      .box {
        margin-left: 0;
        width: 100%;
      }
    }
  }
  &_form {
    padding: 0 1rem 3rem;
    .inner {
      max-width: 600px;
      margin: 0 auto;
    }
    .title {
      text-align: center;
      font-size: 2.4rem;
    }
    .fgline {
      width: 5rem;
      border-bottom: 2px solid #616161;
      margin: 1rem auto 2rem;
    }
    .form {
      border: 1px solid #417CFF;
      border-radius: 1rem;
      padding: 2rem;
    }
    li {
      display: flex;
      margin-bottom: 1rem;
    }
    label {
      margin-right: .6rem;
      color: #417CFF;
      font-size: 1.1rem;
    }
    .control {
      flex: 1;
      width: 0;
      min-height: 2rem;
      border: 1px solid #616161;
      color: #616161;
    }
    input {
      padding: 0 .5rem;
    }
    textarea {
      padding: .5rem;
    }
    .btns {
      text-align: right;
      button {
        background-color: transparent;
        border: 1px solid #417CFF;
        color: #417CFF;
        font-size: 1.2rem;
        padding: .3rem .5rem;
        border-radius: 3px;
        line-height: 1;
      }
    }
  }
}
</style>
