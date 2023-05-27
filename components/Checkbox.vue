<template>
  <div
    class="flex items-center"
    :class="`flex-row${position === 'right' ? '' : '-reverse'}`"
    @click="$emit('input', !value)"
  >
    <div class="relative check w-6 h-6">
      <img
        v-show="value"
        class="w-5 h-5 absolute top-0 right-0"
        src="../assets/images/FrontendContractImg/check1.svg"
      />
    </div>
    <slot>
      <span
        class="select-none"
        :class="`m${position === 'right' ? 'l' : 'r'}-2`"
        >{{ label }}</span
      >
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: Boolean,
    position: {
      type: String,
      default: 'right'
    }
  }
}
</script>

<style scoped>
.check {
  background-image: url('../assets/images/FrontendContractImg/checkbox.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
