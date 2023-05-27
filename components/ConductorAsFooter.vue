<template>
  <div class="relative conductor-width text-white pl-16 flex items-center ">
    <div
      class="absolute bgInline h-full z-0 w-28"
      :style="{ left: getPosition, opacity: !isValidRoute ? 0 : 1 }"
    ></div>
    <div
      @mouseleave="changeKey($route.name)"
      @mouseover="changeKey('index')"
      class="z-10 navItems h-full"
    >
      <NuxtLink :to="localePath('/')" class="flex flex-col items-center justify-center home">
        <p>Home</p>
        <img
          src="../assets/images/ConductorImg/whiteHome.png"
          alt="home"
          class="w-8"
      /></NuxtLink>
    </div>
    <div
      @mouseleave="changeKey($route.name)"
      @mouseover="changeKey('about')"
      class="z-10 navItems h-full"
    >
      <NuxtLink :to="localePath('/about')" class="flex flex-col items-center justify-center">
        <p>About</p>
        <img
          src="../assets/images/ConductorImg/logoWhite.png"
          alt="sigma"
          class="w-8"
        />
      </NuxtLink>
    </div>
    <div
      @mouseleave="changeKey($route.name)"
      @mouseover="changeKey('services')"
      class="z-10 navItems h-full"
    >
      <NuxtLink
        :to="localePath('/services')"
        class="flex flex-col items-center justify-center"
      >
        <p>Services</p>
        <img
          src="../assets/images/ConductorImg/whiteSettings.png"
          alt="serv"
          class="w-8"
        />
      </NuxtLink>
    </div>
    <div
      @mouseleave="changeKey($route.name)"
      @mouseover="changeKey('download')"
      class="z-10 navItems h-full"
    >
      <NuxtLink
        :to="localePath('/download')"
        class="flex flex-col items-center justify-center"
      >
        <p>App</p>
        <img
          src="../assets/images/ConductorImg/iphone.png"
          alt="app"
          class="w-8"
        />
      </NuxtLink>
    </div>
    <div
      @mouseleave="changeKey($route.name)"
      @mouseover="changeKey('works')"
      class="z-10 navItems h-full"
    >
      <NuxtLink :to="localePath('/works')" class="flex flex-col items-center justify-center">
        <p>Works</p>
        <img
          src="../assets/images/ConductorImg/works.svg"
          alt="partner"
          class="w-8"
        />
      </NuxtLink>
    </div>
    <div
      @mouseleave="changeKey($route.name)"
      @mouseover="changeKey('contact')"
      class="z-10 navItems h-full"
    >
      <NuxtLink :to="localePath('/contact')" class="flex flex-col items-center justify-center">
        <p>Contacts</p>
        <img
          src="../assets/images/ConductorImg/contacts.png"
          alt="contacts"
          class="w-8"
        />
      </NuxtLink>
    </div>
    <!--    <NuxtLink to="/FrontendFirstPageContract" class="flex flex-col items-center">-->
    <!--      <p>F1F2F3</p>-->
    <!--      <img-->
    <!--        src="../assets/images/ConductorImg/handWhite.png"-->
    <!--        alt="contacts"-->
    <!--        class="w-8"-->
    <!--      />-->
    <!--    </NuxtLink>-->
  </div>
</template>

<script>
export default {
  name: 'ConductorAsFooter',
  data() {
    return {
      currentPositionKey: this.$route.name.split('-')[0].split('_')[0],
      positions: {
        index: 0,
        about: 112,
        services: 224,
        download: 336,
        works: 448,
        contact: 560 //not ready yet
      }
    }
  },
  methods: {
    changeKey(key) {
      if (!this.isValidRoute) {
        this.currentPositionKey = ''
      }
      this.currentPositionKey = key.split('-')[0].split('_')[0]
    }
  },
  computed: {
    isValidRoute() {
      return Object.keys(this.positions).includes(this.currentPositionKey)
    },
    getPosition() {
      if (!Object.keys(this.positions).includes(this.currentPositionKey))
        return this.positions.index + 'px'
      return this.positions[this.currentPositionKey] + 'px'
    }
  }
}
</script>

<style scoped>
@media (max-width: 1130px) {
  .conductor-width {
    /* width: calc(100% - 40px); */
    padding-left: 0;
  }
  .bgInline {
    display: none;
  }
  .nuxt-link-exact-active,
  .nuxt-link-active:not(.home) {
    background-color: #016189;
  }
  a {
    padding: 0 20px;
  }
}
@media screen and (min-width: 1130px) {
  .navItems {
    width: 112px;
  }
}
@media screen and (max-width: 760px) {
  a > p {
    display: none;
  }
  .conductor-width {
    width: 100%;
  }
  .navItems {
    padding: 0;
    flex: 1;
  }
  a {
    padding: 0 2px;
  }
}
/*
@media (min-width: 1600px) and (max-width: 1681px) {
  .conductor-width {
    width: calc(100% - 30px);
  }
} */
a {
  color: white;
  height: 100%;
  text-decoration: none;
}
.bgInline {
  transform: translateX(64px);
  transition: all 0.2s;
  background-color: rgba(1, 97, 137, var(--tw-bg-opacity));
}
</style>
