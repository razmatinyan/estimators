<template>
  <div class="w-full bg-pageRed flex h-16 justify-between footerCon">
    <ConductorAsFooter />
    <div class="bg-pageBlue flex">
      <div class="w-1 h-full bg-teamBg"></div>
      <div
        class="h-18 font-bold text-white  flex items-center justify-center sender h-full px-1 text-center"
        :class="getClass"
        @click="$emit('send')"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import ConductorAsFooter from '@/components/ConductorAsFooter'
export default {
  name: 'Conductor',
  props: {
    className: {
      type: Object | String | Array,
      default: () => ({})
    }
  },
  components: { ConductorAsFooter },
  computed: {
    getClass() {
      if (!this.className) return ''
      return this.className
    }
  }
}
</script>

<style lang="scss" scope>
.sender {
  // width: auto;
  min-width: 200px;
  // width: 300px;
  height: 100%;
  transition: all 0.2s;
}
@media screen and (max-width: 760px) {
  .sender {
    // width: auto;
    min-width: 70px !important;
    font-size: 12px;
    // width: 300px;
  }
  .footerCon {
    height: 50px;
  }
}
.footerCon {
  z-index: 9999999;
  position: relative;
}
</style>
