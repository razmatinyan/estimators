<template>
  <div class="fullContainer overflow-hidden flex flex-col">
    <AppHeader />
    <Nuxt class="flex-1 overflow-auto" />
    <MenuNav class="sticky bottom-0" />
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader'
import MenuNav from '@/components/MenuNav'

export default {
  components: { AppHeader, MenuNav },
  created() {
    window.addEventListener('resize', this.heightController)
    this.heightController()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.heightController)
  },
  methods: {
    heightController() {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
  }
}
</script>
<style lang="scss">
@font-face {
  font-family: 'Calibri';
  src: url('../assets/fonts/Calibri Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Chiller';
  src: url('../assets/fonts/Chiller.TTF') format('truetype');
  font-weight: normal;
  font-style: normal;
}
html {
  // font-family: 'Gotham-Font', 'Source Sans Pro', -apple-system,
  //   BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-size: 16px;
  font-family: Calibri !important;
  margin: 0 !important;
  padding: 0 !important;
  color: #000 !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.mainRed {
  color: #841f3b;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s;
}
.slide-fade-enter {
  transform: translateX(20px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.anim {
  animation: dash 15s linear forwards;
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  // border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #841f3b;
  // border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #016189;
}
</style>

<style lang="scss" scope>
.fullContainer {
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
}
</style>
