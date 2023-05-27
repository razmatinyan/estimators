<template>
  <header
    class="bg-headerBg h-16 w-full flex justify-between items-center px-5 conHead"
  >
    <div>
      <NuxtLink :to="localePath('/')">
        <!-- v-on:animCreated="handleAnimation" -->
        <lottie
          :width="70"
          :height="70"
          :options="lottieOptions"
          class="xl:h-44 xl:w-44 lg:h-28 lg:w-28 page-logo"
        />
      </NuxtLink>
    </div>
    <div class="flex items-center">
      <NuxtLink v-if="!getIsAuth" :to="localePath('/auth/login')" class="text-lg text-center mr-2"
        >{{ $t('join') }}</NuxtLink
      >
      <NuxtLink :to="localePath('/dashboard')" class="mr-2" v-else>
        <img
          v-if="getUser.photo"
          :src="getUser.photo"
          class="rounded-full object-cover h-10 w-10 cursor-pointer"/>
        <img
          v-else
          src="~/assets/images/users/usericon.svg"
          class="h-10 cursor-pointer"
      /></NuxtLink>

      <SwitchLanguages />

      <!-- <div class="bg-pageRed h-6 w-1 mx-2"></div> -->
      <!-- <NuxtLink to="/signUp" class="text-lg text-center">Sign Up</NuxtLink> -->
    </div>
  </header>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from 'assets/js/logo-lottie.json'
import { mapGetters } from 'vuex'

export default {
  name: 'AppHeader',
  components: {
    lottie
  },
  data() {
    return {
      isOpen: false,
      // anim: null,
      lottieOptions: { animationData: animationData.default }
    }
  },
  computed: {
    ...mapGetters('api', ['getIsAuth', 'getUser'])
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
    // handleAnimation(anim) {
    //   this.anim = anim
    // }
  }
}
</script>

<style lang="scss" scoped>
.page-logo {
  width: 55px !important;
}
@media screen and (max-width: 582px) {
  .conHead {
    padding: 0 20px !important;
    * {
      font-size: 13px;
    }
  }
}
.conHead {
  z-index: 9999999;
  position: relative;
}
</style>
