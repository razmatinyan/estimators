<template>
  <div class="bg-teamBg base flex justify-center">
<!--    <div class="w-1/4 flex flex-col justify-center list">-->
<!--      <div-->
<!--        v-for="project in projects"-->
<!--        :key="project"-->
<!--        class="mb-8 ml-28 flex items-start justify-end"-->
<!--      >-->
<!--        <div-->
<!--          style="font-size: 25px"-->
<!--          class="text-right border-b-2 inline mr-2 border-pageBlue cursor-pointer"-->
<!--          @click="selectedProject = project"-->
<!--          :class="{ active: selectedProject === project }"-->
<!--        >-->
<!--          {{ project }}-->
<!--        </div>-->
<!--        <div class="w-3 h-3 bg-pageBlue rounded-full mt-8 dots" />-->
<!--      </div>-->
<!--    </div>-->
    <b><p class="ipadLeftText text-center">You can get acquainted with our portfolio signing in Virtua reality office</p></b>
    <div class="select-none ipadWrapper">
      <div class="ipad border-4 border-pageBlue h-full flex">
        <div class="pl-10 py-10 flex items-center">
          <div class="w-2 h-2 bg-black rounded-full" />
        </div>
        <div
          class="flex-1 flex flex-col justify-between m-10 relative overflow-hidden"
        >
          <img
            :key="selectedProject"
            src="~/assets/images/PartnersImg/ipad-lock.jpg"
            class="absolute top-0 left-0 h-full z-index-1 ipad-lock"
            v-on:click="unlockScreen"
          />
          <transition name="top">
            <iframe scrolling="no" allow="autoplay;" class="absolute top-0 left-0 h-full" src="https://over443.tk/310522webgl/WEB/" style="max-width: none !important; width: 100%; height: 100%; border:0px #ffffff none;" allowtransparency="true"></iframe>
          </transition>
          <div
            class="pt-3 px-5 flex justify-between items-center relative z-index-1 ipadTop"
          >
            <span class="text-white font-bold"
              >{{ getHours }}:{{ getMinutes }} {{ ampm }}</span
            >
            <div class="flex items-center">
              <img src="~/assets/images/PartnersImg/wifi.svg" class="" />
              <span class="mx-2 text-white font-bold">100%</span>
              <div class="w-10 h-3 bg-white" />
              <div class="h-2 w-1 bg-white" />
            </div>
          </div>
<!--          <div class="flex justify-end items-center flex-1 relative px-16">-->
<!--            <transition name="rightamin">-->
<!--              <img-->
<!--                :key="selectedProject"-->
<!--                :src="getImgUrl(ipadObj[selectedProject].phone)"-->
<!--                class="absolute max-h-full"-->
<!--              />-->
<!--            </transition>-->
<!--          </div>-->
          <div class="pb-3 px-5 flex relative z-index-1 ipadBottom">
            <div ref="swipe-up-container" class="swipe-up-container">
              <b><p class="text-center swipe-text">
                Swipe up <br>to unlock <br>
                <img src="~/assets/images/PartnersImg/swipe-up-to-unlock.png">
              </p></b>
            </div>
            <img
              src="~/assets/images/PartnersImg/ios.svg"
              class="border mr-3 border-pageBlue rounded-full p-2 bg-white w-10 h-10 cursor-pointer"
              title="iOS"
            />
            <img
              src="~/assets/images/PartnersImg/Androida.svg"
              class="border mr-3 border-pageBlue rounded-full p-2 bg-white w-10 h-10 cursor-pointer"
              title="Android"
            />
            <img
              src="~/assets/images/PartnersImg/web.svg"
              class="border mr-3 border-pageBlue rounded-full p-2 bg-white w-10 h-10 cursor-pointer"
              title="Web"
            />
          </div>
        </div>
        <div class="pr-10 py-10 flex items-center">
          <div
            class="w-12 h-12 border border-black rounded-full"
            style="box-shadow: 0 0 5px #016189 inset;"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Partners',
  layout: 'homeDefault',
  data() {
    return {
      date: new Date(),
      interval: null,
      projects: [
        'A2Z',
        'Media Dummy',
        // 'Education',
        'Managment System',
        'CheckIn'
      ],
      selectedProject: 'A2Z',
      ipadObj: {
        'Media Dummy': {
          bg: 'Mediadummy1',
          phone: 'Mediadummy1.1'
        },
        // Education: {
        //   bg: 'media2',
        //   phone: 'b2bphone'
        // },
        'Managment System': {
          bg: 'managment1',
          phone: 'Managment1.1'
        },
        A2Z: {
          bg: 'a2z1',
          phone: 'A2z1.1'
        },
        CheckIn: {
          bg: 'checkin1',
          phone: 'checkin1.1'
        }
      }
    }
  },
  created() {
    this.interval = setInterval(() => (this.date = new Date()), 1000) // recursive!
    this.changeConductorButtonText('Become a partner')
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    ...mapActions('dialog', ['changeConductorButtonText']),
    getImgUrl(pet) {
      let images = require.context(
        '~/assets/images/PartnersImg',
        false,
        /\.png$/
      )
      return images('./' + pet + '.png')
    },
    unlockScreen(el){
      el.target.style.transition = '0.5s'
      el.target.style.top = '-1000px'
      this.$refs['swipe-up-container'].style.display = 'none'
    }
  },
  computed: {
    getMinutes() {
      return (this.date.getMinutes() < 10 ? '0' : '') + this.date.getMinutes()
    },
    getHours() {
      return this.date.getHours()
    },
    ampm() {
      return this.getHours >= 12 ? 'PM' : 'AM'
    }
  }
}
</script>

<style lang="scss" scoped>
.ipad {
  /* border: 1px solid black; */
  border-radius: 50px;
  /* max-width: 1300px;
  max-height: 790px; */
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
}
.ipadWrapper {
  margin: auto 50px;
  height: 0;
  overflow: hidden;
  padding-top: 591.44px / 1127.34px * 75%;
  width: 75%;
  position: relative; /* width: 100%; */
  /* aspect-ratio: 16/9; */
  /* height: attr(width) * (16/9); */
}
.active {
  color: #841f3b;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.top-enter-active,
.top-leave-active {
  transition: all 0.3s ease;
}
.top-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100%);
}
.top-leave-to {
  transform: translateX(-100%);
}
/* .rightamin-leave-active { */
/* transition: all 0.9s ease; */
/* } */
.rightamin-enter-active {
  transition: all 0.9s ease;
}
.rightamin-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100%);
}
.rightamin-leave-to {
  /* transform: translateX(-100%);
  opacity: 0; */
  opacity: 0;
}

.list div {
  transition: all 0.2s;
}

.base {
  padding: 10px 20px;
}

@media screen and (max-width: 1050px) {
  .base {
    display: block;
  }
  .ipadWrapper {
    margin: 50px auto;
  }
  .list {
    flex-direction: row !important;
    flex-wrap: wrap;
    width: 100%;
    align-items: flex-end;
    > div {
      margin: 10px 20px 10px;
    }
  }
}

@media screen and (max-width: 777px) {
  .ipadTop,
  .ipadBottom {
    padding: 10px !important;
  }
  .ipadWrapper {
    margin: 0;
  }

  .ipadWrapper {
    margin: 0;
    padding-top: 591.44px / 1127.34px * 100%;
    width: 100%;
  }
  .ipad > div {
    &:first-child {
      padding: 1rem 0 1rem 1rem;
    }
    &:nth-child(2) {
      margin: 1rem;
    }
    &:nth-child(3) {
      padding: 1rem 1rem 1rem 0;
      > div {
        width: 2rem;
        height: 2rem;
      }
    }
  }
  .list {
    div {
      font-size: 20px !important;
      &.dots {
        margin-top: 1.6rem;
      }
    }
  }
}
.ipadLeftText{
  height: 100%;
  max-width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: end;
  font-size: 2rem;
}
.z-index-1{
  z-index: 1;
}
.ipad-lock{

}
.unlock {
  top: -1000px;
  transition: 1s;
}
.swipe-up-container{
  position: absolute;
  width: calc(100% - 9rem);
  animation: MoveUpDown 8s linear infinite;
}
@keyframes MoveUpDown {
  0% {
    bottom: 5px;
  }
  93% {
    bottom: 5px;
  }
  96% {
    bottom: 10px;
  }
  100% {
    bottom: 5px;
  }
}
.swipe-up-container img{
  width: 150px;
  height: 10px;
}
.swipe-text{
  color: #e5e5e5;
  line-height: 1.2;
  font-weight: bold;
  opacity: 0.9;
}
</style>
