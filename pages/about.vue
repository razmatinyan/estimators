<template>
  <div>
    <div
      class="about-company-wrapper flex justify-center items-center h-full bg-teamBg"
    >
      <div class="about-company h-full w-full flex-wrap flex py-10">
        <div class="flex-1 h-full pr-10 pl-20 flex flex-col justify-between">
          <div>
            <p class="text-right font-bold">About</p>
            <hr class="divider" style="border-color: black" />
            <div class="flex justify-between p-1">
              <div class="flex items-center">
                <span class="headingDay">{{ getDay }}</span>
                <div class="flex flex-col ml-3">
                  <span class="headingMonth">
                    {{ getDayString }}
                  </span>
                  <span class="headingMonth">{{ getMonthString }}</span>
                </div>
              </div>
              <div class="flex flex-col items-end">
                <span class="headingYear">{{ getYear }}</span>
                <span class="headingWeek flex flex-wrap justify-end"
                  ><div>0 - <b>365</b></div>
                  &nbsp;
                  <div><b>Week</b> - 0</div></span
                >
              </div>
            </div>
            <div class="relative leftInner">
              <div class="top-0 left-0 right-0 absolute">
                <hr
                  v-for="i in lineCount"
                  :key="i"
                  class="pb-8 w-full"
                  style="border-color:#000"
                />
              </div>
              <div class="z-10 relative">
                <div class="flex relative tableClockWrapper">
                  <!-- style="" -->
                  <img
                    src="~/assets/images/AboutCompanyImg/table.svg"
                    alt="table"
                    class="mx-5 w-2/5 h-auto tableimg"
                  />
                  <div class="w-36 clockWrapper">
                    <Clock
                      type="small"
                      class="bg-white border-2 border-pageRed rounded-full z-10 clock"
                    />
                  </div>
                  <div
                    class="flex flex-col justify-between flex-1 reviwWrapper"
                  >
                    <p class="uppercase font-bold">
                      weekly code review
                    </p>
                    <p class="text-right uppercase font-bold">
                      what happened today?
                    </p>
                  </div>
                </div>
                <div class="aboutBottomTexts">
                  <transition mode="out-in" name="slide-fade">
                    <b
                      :key="currentInfo.title"
                      class="uppercase"
                      style=" font-size: 20px"
                      >{{ currentInfo.title }}</b
                    >
                  </transition>
                  <transition mode="out-in" name="slide-fade">
                    <p :key="currentInfo.text">{{ currentInfo.text }}</p>
                  </transition>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center z-10 paginationWrapper mt-3 ">
            <img
              src="../assets/images/AboutCompanyImg/leftArr.svg"
              class="mr-2 w-24 cursor-pointer "
              @click="move('left')"
            />
            <span
              v-for="i in infos.length"
              :key="i"
              class="w-7 h-7 px-1 mt-3 cursor-pointer text-center rounded-full paginators relative"
              @click="selectedPage = i"
            >
              {{ i }}
              <svg
                v-if="selectedPage === i"
                class="absolute top-0 left-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                width="0.22352in"
                height="0.221866in"
                version="1.0"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                viewBox="0 0 1.56 1.55"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
              >
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer" />
                  <path
                    class="pathCircle"
                    :class="{ anim: selectedPage === i }"
                    d="M0.79 0.11c0.4,-0.03 0.72,0.25 0.72,0.66 0,0.4 -0.33,0.73 -0.73,0.73 -0.4,0 -0.73,-0.33 -0.73,-0.73 0,-0.35 0.25,-0.64 0.57,-0.72 0.01,-0 0.02,-0 0.03,-0.01"
                  />
                </g>
              </svg>
            </span>
            <img
              src="../assets/images/AboutCompanyImg/rightArr.svg"
              class="ml-2 w-24 cursor-pointer"
              @click="move('right')"
            />
          </div>
        </div>

        <div class="max-w-3xl h-full mr-20 flex-1">
          <div class="about-chatting p-6 bg-talksBg flex flex-col mt-2">
            <div class="childWrapper overflow-y-auto">
              <NuxtChild />
            </div>

            <div class="space-y-2 border-t-2 border-gray-600 p-2 pb-0">
              <input
                class="classMessage form-input mt-1 block w-full h-12 pl-2 pr-2 bg-teamBg text-lg outline-none overflow-auto"
                placeholder="Send a Message"
                @focus="openChat"
                v-model="message"
              />

              <hr class="divider" />
              <div
                class="flex flex-wrap justify-between items-center converterControllerWrapper"
              >
                <div
                  class="flex space-x-3 converterController"
                  @click="openChat"
                >
                  <div class="relative emojiesWrapper">
                    <div
                      class="absolute top-0 left-0 bg-gray-300 flex-wrap w-52 p-2 rounded-md emojies"
                      style="transform: translateY(-100%);"
                    >
                      <img
                        v-for="smile in smiles"
                        :src="getImgUrl(smile)"
                        @click="addEmoji(smile)"
                        :key="smile"
                        class="m-1 w-10 h-10 cursor-not-allowed"
                      />
                    </div>
                    <img
                      src="~/assets/images/AboutCompanyImg/smile.svg"
                      alt=""
                      class="h-8 w-8"
                    />
                  </div>
                  <img
                    src="~/assets/images/AboutCompanyImg/paperclip.svg"
                    alt=""
                    class="h-8 w-8 cursor-not-allowed"
                  />
                  <img
                    src="~/assets/images/AboutCompanyImg/at.svg"
                    alt=""
                    class="h-8 w-8 cursor-not-allowed"
                  />
                </div>
                <NuxtLink
                  :to="localePath('/about/task')"
                  class="chatController flex items-center btn-shadow rounded-lg p-2 shadow-inner shadow-pageBlue"
                >
                  <img
                    src="~/assets/images/AboutCompanyImg/add.svg"
                    alt=""
                    class="h-8 w-8 pr-2"
                  /><span>Task</span>
                </NuxtLink>
                <NuxtLink
                  :to="localePath('/about/note')"
                  class="chatController flex items-center btn-shadow rounded-lg p-2"
                >
                  <img
                    src="~/assets/images/AboutCompanyImg/notes.svg"
                    alt=""
                    class="h-8 w-8 pr-2"
                  /><span>Note</span>
                </NuxtLink>
                <NuxtLink
                  :to="localePath('/about/meeting')"
                  class="chatController flex items-center btn-shadow rounded-lg p-2"
                >
                  <img
                    src="~/assets/images/AboutCompanyImg/video-camera.svg"
                    alt=""
                    class="h-8 w-8 pr-2"
                  /><span>Start meeting</span>
                </NuxtLink>
                <NuxtLink
                  :to="localePath('/about/rules')"
                  class="chatController flex items-center btn-shadow rounded-lg p-2"
                >
                  <img
                    src="~/assets/images/AboutCompanyImg/ruls.svg"
                    alt=""
                    class="h-8 w-8 pr-2"
                  /><span>Rules</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Conductor from '@/components/Conductor'
import Clock from '@/components/_partials/Clock'
import EventBus from '@/helpers/EventBus'
import { mapActions } from 'vuex'

export default {
  name: 'about',
  layout: 'homeDefault',
  components: { Conductor, Clock },
  data() {
    return {
      message: '',
      today: new Date(),
      selectedPage: 1,
      lineCount: 17,
      infos: [
        {
          id: 1,
          title: 'Estimators',
          text:
            'Estimators is a team consisting of creative talents, which provides full service in your digital platform. The company was established in Armenia 2020 and during the one-year period gained the American market’s attention and has an office in Los Angeles. We work fairly with our clients and we are transparent in our service, when we believe in the idea we turn the impossible into possible.'
        },
        {
          id: 2,
          title: 'About team',
          text:
            'We are a team of ui/ux designers, developers, project managers, and specialists. Our team members are devoted to their job and our CTO is a Ninja.'
        },
        {
          id: 3,
          title: 'Our Philosophy',
          text:
            'We believe that personal and business relationships should be simple and transparent, therefore we often use minimalism and aim to provide the user with detailed information which is regarding to our project.'
        },
        {
          id: 4,
          title: 'Technologies',
          text:
            'PWA is one of the pioneer… in IT sphere. This technology helps your website to be available in any types of devices(laptops, computers, and mobile phones) due to APP. We basically use the following programming languages: For Backend Java, Node Js C#, For - Frontend JS (react, vue, angular) For - APP, Fluuter.'
        },
        {
          id: 5,
          title: 'Founder',
          text:
            'Was founded by Gor Samsonyan - a man passionate about team building, with a clear ambition: to become a reliable partner in innovative construction projects and to leave a positiveimpact on the developers work culture.'
        }
      ],
      smiles: [
        'emoji10',
        'emoji12',
        'emoji2',
        'emoji4',
        'emoji7',
        'emoji9',
        'emoji11',
        'emoji1',
        'emoji3',
        'emoji5',
        'emoji8',
        'emoji6'
      ]
    }
  },
  created() {
    window.addEventListener('resize', this.resizeHandler)
    this.resizeHandler()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler)
  },
  watch: {
    message(val) {
      this.changeConductorButtonText(val ? 'Send' : '')
    }
  },
  computed: {
    currentInfo() {
      return this.infos.find(info => info.id === this.selectedPage)
    },
    getDay() {
      return this.today.getDate()
    },
    getYear() {
      return this.today.getFullYear()
    },
    getDayString() {
      return this.today.toLocaleString('en-us', { weekday: 'long' })
    },
    getMonthString() {
      return this.today.toLocaleString('default', { month: 'long' })
    }
  },
  methods: {
    ...mapActions('dialog', ['changeConductorButtonText']),
    resizeHandler() {
      if (document.body.offsetWidth <= 568 && this.lineCount === 17) {
        this.lineCount = 7
      } else if (document.body.offsetWidth > 568 && this.lineCount !== 17) {
        this.lineCount = 17
      }
    },
    getImgUrl(pet) {
      let images = require.context(
        '../assets/images/ChatFaces/smiles',
        false,
        /\.svg$/
      )
      return images('./' + pet + '.svg')
    },
    openChat() {
      this.$router.push('/about')
    },
    move(direction) {
      if (direction === 'left') {
        if (this.selectedPage > 1) --this.selectedPage
      } else {
        if (this.selectedPage < this.infos.length) ++this.selectedPage
      }
    }
  }
}
</script>

<style scoped>
.tableClockWrapper {
  padding-top: 33px;
  height: 330px;
}
.headingDay {
  font-size: 70px;
  line-height: 70px;
  transition: all 0.2s;
}

.headingWeek {
  font-size: 25px;
  line-height: 25px;
  transition: all 0.2s;
}

.headingYear {
  font-size: 45px;
  line-height: 45px;
  transition: all 0.2s;
}

.headingMonth {
  font-size: 35px;
  line-height: 35px;
  transition: all 0.2s;
}

.aboutBottomTexts {
  padding-top: 34px;
  height: 165px;
}

[contenteditable]:empty:before {
  content: attr(placeholder);
  pointer-events: none;
  display: block; /* For Firefox */
  color: gray;
}

.emojies {
  display: none;
}
.emojiesWrapper:hover .emojies {
  display: flex;
}

.pathCircle {
  stroke: #841f3b;
  stroke-width: 0.1;
  stroke-miterlimit: 2.61313;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  fill: none;
}

.paginationWrapper .paginators {
  line-height: 28px;
  /* background-image: url('../assets/images/AboutCompanyImg/circle black.svg'); */
  background-repeat: no-repeat;
  background-size: cover;
}
.leftInner {
  line-height: 33px;
}
.chatController {
  border: 1px solid #005b8b;
}
.divider {
  border: 2px solid #005b8b;
  border-radius: 3px;
}
.classMessage {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: 2px solid #005b8b;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  white-space: nowrap;
}
/* .about-company-wrapper {
  height: calc(100vh - 64px - 64px);
}
.about-company {
  height: calc(100vh - 64px - 64px);
} */

.about-chatting {
  height: 100%;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 0 0 0 2px #016189, 0 0 0 5px #f3f1f1, 0 0 0 8px #016189;
}

.childWrapper {
  /* box-shadow: gray 0 0 15px 0; */
  height: calc(100% - 142px);
}

.converterController img {
  transition: all 0.2s;
}
.converterController ~ a {
  transition: all 0.2s;
}

@media screen and (max-width: 1530px) {
  .about-company {
    /* flex-direction: column; */
    /* align-items: center; */
    display: block;
    padding-top: 0;
  }

  .about-company > div {
    /* display: block; */
    margin: 10px auto 20px;
    padding: 0 20px;
  }
  .about-company > div:first-child {
    height: auto;
    margin: 20px 60px;
  }
}
@media screen and (max-width: 824px) {
  .aboutBottomTexts {
    padding-top: 0;
  }
  .tableimg {
    margin: 0 !important;
    height: 155px !important;
  }
  .converterController img {
    width: 20px;
    height: 20px;
  }
  .converterController ~ a {
    padding: 0 !important;
    border: none !important;
  }
  .converterController ~ a span {
    display: none;
  }
  .converterControllerWrapper {
    justify-content: flex-start !important;
  }
  .converterController {
    margin-right: 12px !important;
  }
  .about-chatting {
    padding-bottom: 0;
  }
}

@media screen and (max-width: 700px) {
  .headingDay {
    font-size: 50px;
    line-height: 50px;
  }
  .about-company > div {
    padding: 0 !important;
  }
  .about-company > div:first-child {
    margin: 20px !important;
  }
  .headingMonth {
    font-size: 25px;
    line-height: 25px;
  }
  .headingYear {
    font-size: 30px;
    line-height: 30px;
  }
  .headingWeek {
    font-size: 20px;
    line-height: 20px;
  }
  .headingDay + div {
    margin-left: 5px !important;
  }
  .about-company > div:last-child {
    /* display: block; */
    margin: 10px 10px 20px;
    /* padding: 0 20px; */
  }
}

@media screen and (max-width: 568px) {
  .clock {
    width: 88px !important;
    height: 88px !important;
    /* justify-content: flex-end; */
    right: 0;
  }
  .clockWrapper {
    width: auto;
    flex: 1;
  }
  .reviwWrapper {
    display: none;
  }
  .tableClockWrapper {
    height: 200px;
  }
  .aboutBottomTexts {
    height: auto;
    /* padding-bottom: calc(100% - 330px); */
  }
  .aboutBottomTexts > b {
    border-bottom: 1px solid black;
    /* padding-bottom: 0px; */
    width: 100%;
    display: block;
  }

  .aboutBottomTexts > p {
    text-decoration: underline;
    text-underline-offset: 10px;
    text-decoration-thickness: 1px;
    text-align: justify;
    text-align-last: left;
    /* text-underline-width: 100%; */
    /* text-justify: inter-word; */
  }
  /* .aboutBottomTexts > p:after { */
  /* content: ' '; */
  /* line-height: 0; */
  /* visibility: hidden; */
  /* } */
  /* .aboutBottomTexts > p:line */
}
</style>
