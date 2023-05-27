<template>
  <div
    v-if="user"
    :style="{ width: size + 'px', height: size + 'px' }"
    class="rounded-full overflow-hidden"
  >
    <img
      v-if="user.photo"
      :src="user.photo"
      class="object-cover h-full w-full"
    />
    <div
      v-else-if="this.user.firstName"
      class="border-2 h-full w-full overflow-hidden firstLettersImg rounded-full"
      :style="{
        'border-color': getColor + ' !important',
        color: getColor,
        fontSize
      }"
    >
      {{ firstLetters }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({})
    },
    size: {
      type: String | Number,
      default: 81
    },
    fontSize: {
      type: String,
      default: '55px'
    }
  },
  computed: {
    getColor() {
      return this.user.userColor || '#841F3B'
    },
    firstLetters() {
      return (
        (this.user?.firstName?.[0]?.toUpperCase() ?? '') +
        (this.user?.lastName?.[0]?.toUpperCase() ?? '')
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.firstLettersImg {
  letter-spacing: -5px;
  white-space: nowrap;
  font-family: 'Chiller';
  text-align: center;
  user-select: none;
}
</style>
