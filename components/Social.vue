<template>
  <div class="relative mb-2">
    <label
      :for="label"
      class="absolute left top-1/2 p-1 h-full cursor-text"
      style="transform: translateY(-50%)"
    >
      <img :src="getImgUrl(img)" class="h-full select-none" />
    </label>
    <input
      class="form-control"
      style="padding-left: 40px !important"
      :id="label"
      type="text"
      :placeholder="placeholder"
      @change="$emit('input', $event.target.value)"
      :class="{ hasError: error }"
    />
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    label: String,
    placeholder: String,
    value: String,
    error: Boolean
  },
  methods: {
    getImgUrl(pet) {
      let images = require.context('~/assets/images/Socials/', false, /\.svg$/)
      return images('./' + pet + '.svg')
    }
  }
}
</script>

<style scoped>
input.hasError {
  border-color: red !important;
}
</style>
