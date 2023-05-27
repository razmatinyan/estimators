<template>
  <div class="meeting p-2 flex max-h-full flex-col">
    <h3 class="font-bold">Select Date & Time for Meeting</h3>
    <div class="flex flex-1 max-h-full overflow-hidden">
      <div class="w-3/5 overflow-auto pr-2 flex flex-col">
        <no-ssr>
          <v-date-picker
            is-expanded
            class="calendar"
            mode="range"
            show-caps
            v-model="selectedDate.day"
          />
        </no-ssr>
        <div class="flex flex-col items-center">
          <img src="../../assets/images/AboutCompanyImg/star.svg" />
          <p class="text-center text-pageRed font-bold">
            Keep everything organized in one place
          </p>
        </div>
      </div>
      <div class="w-2/5 pl-2 pr-2 max-h-full overflow-y-auto">
        <div
          class="flex justify-center font-bold"
          v-for="time in generateTime()"
          :key="time"
          @click="selectTime(time)"
        >
          <div
            v-if="getTime !== time"
            class="py-3 text-center my-2 w-full cursor-pointer border-solid border-2 border-pageBlue"
          >
            {{ time }}
          </div>
          <div v-else class="text-center my-2 w-full flex">
            <div
              class="flex-1 py-3 border-pageBlue border-solid border-2 mr-2 cursor-default"
            >
              {{ time }}
            </div>
            <div
              class="flex-1 py-3 cursor-pointer border-pageBlue border-solid border-2 ml-2"
            >
              Confirm
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'meeting',
  data() {
    return {
      selectedDate: {
        day: null,
        hour: null,
        minute: null
      }
    }
  },
  computed: {
    getTime() {
      return `${this.selectedDate.hour}:${this.selectedDate.minute}`
    }
  },
  methods: {
    *generateTime() {
      const date = new Date()
      date.setHours(0, 0)
      do {
        const h = String(date.getHours())
        const m = String(date.getMinutes())
        console.log(h, m, h.lenght === 1)
        yield `${h.length === 1 ? '0' + h : h}:${m.length === 1 ? '0' + m : m}`
        date.setHours(date.getHours(), date.getMinutes() + 30)
      } while (date.getMinutes() + date.getHours() !== 0)
    },
    selectTime(time) {
      const _ = time.split(':')
      this.selectedDate.hour = _[0]
      this.selectedDate.minute = _[1]
    }
  }
}
</script>

<style scoped>
.calendar {
  background-color: transparent;
  border: none;
  background-image: url('../../assets/images/AboutCompanyImg/CalendarBG.svg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 90px 30px 10px;
}
</style>
