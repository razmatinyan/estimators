<template>
  <div class="absolute" :class="getWidthHeight">
    <div
      class="sec w-0.5 absolute bottom-1/2"
      v-bind:style="{ transform: `rotate(${secsDeg})` }"
    />
    <div
      class="min w-1 absolute bottom-1/2"
      v-bind:style="{ transform: `rotate(${minsDeg})` }"
    />
    <div
      class="hour w-1.5 absolute bottom-1/2"
      v-bind:style="{ transform: `rotate(${hourDeg})` }"
    />
    <div
      class="centerDot absolute top-1/2 left-1/2 rounded-full z-10"
      :class="getCircleWH"
    />
  </div>
</template>

<script>
function getDateTime() {
  const date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds()

  const thishourDeg = (hour > 12 ? hour - 12 : hour) * 30 + 'deg'
  const thisminsDeg = min * 6 + 'deg'
  const thissecsDeg = sec * 6 + 'deg'
  return { hour: thishourDeg, min: thisminsDeg, sec: thissecsDeg }
}

export default {
  name: 'Clock',
  props: {
    type: String
  },
  data: () => ({
    hourDeg: getDateTime().hour,
    minsDeg: getDateTime().min,
    secsDeg: getDateTime().sec,
    clock: null
  }),
  mounted() {
    this.clock = setInterval(
      () =>
        ({
          hour: this.hourDeg,
          min: this.minsDeg,
          sec: this.secsDeg
        } = getDateTime()),
      1000
    )
  },
  destroyed() {
    clearInterval(this.clock)
  },
  computed: {
    getWidthHeight() {
      let size = this.type === 'big' ? 80 : 32
      return `w-${size}  h-${size}`
    },
    getCircleWH() {
      let size = this.type === 'big' ? 5 : 3
      return `w-${size}  h-${size}`
    }
  }
}
</script>

<style scoped>
.hour,
.min,
.sec {
  transform-origin: bottom center;
  border-radius: 3px 3px 0 0;
  /* transition: all 1s linear; */
  /* transform: translate(0, -50%); */
}
.centerDot {
  transform: translate(-50%, -50%);
  background: #016189;
}
.min {
  left: calc(50% - 2px);
  background: rgb(132, 31, 59);
  height: 40%;
}

.hour {
  left: calc(50% - 3px);
  height: 30%;
  background: rgb(90, 0, 26);
}

.sec {
  left: calc(50% - 1px);
  height: 46%;
  background: #016189;
}
.h-32 {
  height: 8rem;
}
</style>
