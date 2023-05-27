<template>
  <div class="pl-2 pr-2 pb-3 flex flex-col">
    <div
      :class="`flex-row${isUserMessage ? '-reverse' : ''}`"
      class="flex items-center space-x-3"
    >
      <div
        :class="`flex-row${isUserMessage ? '-reverse' : ''}`"
        class="flex items-center"
      >
        <img :src="getImgUrl(imageURL)" alt="user image" class="h-16" />
        <div>
          <b
            :class="[{ 'text-right': isUserMessage }, 'mx-2']"
            style="color: #016189"
            >{{ title }}</b
          >
          <div
            class="flex items-center"
            :class="`flex-row${isUserMessage ? '-reverse' : ''}`"
          >
            <p class="rounded-md py-2 text-black break-words max-w-lg mx-2">
              <!-- :class="`bg-page${isUserMessage ? 'Red' : 'Blue'}`" -->
              {{ message }}
            </p>
            <span>{{ formatedDate }}</span>
          </div>
        </div>
      </div>
    </div>
    <hr :class="`m-0 dividers align_self_${isUserMessage ? 'start' : 'end'}`" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    message: String,
    date: Date,
    imageURL: String,
    isUserMessage: Boolean
  },
  computed: {
    formatedDate() {
      const h = this.date.getHours()
      const m = this.date.getMinutes()
      console.log(h, m)
      return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}`
    }
  },
  methods: {
    getImgUrl(pet) {
      let images = require.context(
        '../../assets/images/ChatFaces',
        false,
        /\.svg$/
      )
      return images('./' + pet + '.svg')
    }
  }
}
</script>

<style scoped>
/* // TODO Check why TailWind isn't giving this  
*/

.align_self_start {
  align-self: flex-start;
}

.align_self_end {
  align-self: flex-end;
}

.dividers {
  border-color: #841f3b;
  width: calc(100% - 75px);
}

.flex-row-reverse {
  flex-direction: row-reverse;
}
.pr-3 {
  padding-right: 12px;
}
</style>
