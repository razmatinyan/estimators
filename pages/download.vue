<template>
  <div>
    <div class="h-full bg-teamBg">
      <div class="flex justify-around h-full flex-wrap base">
        <div class="flex-1 flex flex-col px-32 py-5 signContractsWrapper">
          <hr class="border-pageBlue border-2 rounded-md" />
          <div>
            <h1 style="font-size: 30px" class="text-center text-pageBlue">
              Sign Contracts With Us Anywhere And Anytime
            </h1>
            <p class="leftWrapper">
              <span>This Contract(This "Agreement") is made as of this</span>
              <v-date-picker
                mode="dateTime"
                is24hr
                class="notHaveB"
                v-model="date"
              >
                <template v-slot="{ inputValue, inputEvents }">
                  <input
                    class="px-2 py-1 mx-2 border rounded focus:outline-none focus:border-blue-300"
                    :value="inputValue"
                    v-on="inputEvents"
                  /> </template></v-date-picker
              ><br /><span
                >by me and AV Promotion LLC Located at USA, California, Los
                Angeles. ("Independent Contractor")<br /></span
              >and<input
                class="px-2 py-1 mx-2 border rounded focus:outline-none focus:border-blue-300"
                placeholder="Your Name Lastname"
              />
              Located at
              <input
                class="px-2 py-1 mx-2 border rounded focus:outline-none focus:border-blue-300"
                placeholder="State"
              /><br /><img
                src="~/assets/images/AppPage/location1.svg"
                class="inline-block"
              /><input
                placeholder="Your address"
                class="px-2 py-1 mx-2 border rounded focus:outline-none focus:border-blue-300 address"
              />("Client").<br /><span
                >Client and Independent Contracot may each be referred to this
                Agreement as a "Party" and collectively as the "Parties".</span
              >
            </p>
          </div>
          <div class="flex flex-1 items-end justify-between flex-wrap">
            <div class="mt-8 mx-auto px-1">
              <div
                class="border-b-4 border-pageBlue flex items-center justify-center"
                style="width: 200px; height: 130px;"
              >
                <img
                  src="~/assets/images/AppPage/signiture1.svg"
                  class="w-full "
                />
              </div>
              <p>Estimators<br /><i>eSignature</i></p>
            </div>
            <div class="mt-8 mx-auto px-1">
              <div
                class="relative"
                style="width: 200px; height: 130px;"
                @mousedown="onBegin"
              >
                <img
                  v-if="hideSignHere"
                  src="~/assets/images/AppPage/signhere.svg"
                  class="absolute top-1/2 left-0 w-full"
                  style="transform: translateY(-50%)"
                />
                <VueSignaturePad
                  id="signature"
                  width="200px"
                  height="130px"
                  class="border-b-4 border-pageBlue relative z-10"
                  :options="{ ...options, onBegin }"
                />
                <img
                  src="~/assets/images/AppPage/grich.svg"
                  class="absolute right-0 top-0 h-20"
                  style="transform: translate(50px, -50%)"
                />
              </div>
              <p>Client<br /><i>eSignature</i></p>
            </div>
          </div>
        </div>
        <div class="flex-1 h-full relative flex justify-center rightSide">
          <div
            class="h-full relative z-10 flex flex-col rightWrapper mt-5 mr-5"
          >
            <div
              style="min-height: 100px"
              class="mt-5 flex flex-col-reverse pl-16 text-white bg-pageBlue"
            >
              <h1 style="font-size: 40px" class="text-white">
                Available on
              </h1>
            </div>
            <div style="flex: 4" class="p-10 flex flex-col">
              <div class="flex mt-8">
                <div
                  @click="selectedApp = 'windows'"
                  class=" relative flex items-center apps cursor-pointer mx-10 w-48"
                >
                  <h1
                    style="font-size: 30px"
                    class="border-b-4 border-pageBlue"
                  >
                    for Windows
                  </h1>
                  <transition mode="out-in" name="slide-fade">
                    <img
                      v-show="selectedApp === 'windows'"
                      src="~/assets/images/AppPage/select_download.svg"
                      class="absolute selections w-64 -left-3 z-10"
                    />
                  </transition>
                </div>
                <img
                  @click="selectedApp = 'windows'"
                  src="~/assets/images/AppPage/download_windows.svg"
                  class="ml-10 w-24 h-24 cursor-pointer icons"
                />
              </div>
              <div class="flex mt-8">
                <div
                  @click="selectedApp = 'android'"
                  class=" relative flex items-center apps cursor-pointer mx-10 w-48"
                >
                  <h1
                    style="font-size: 30px"
                    class="border-b-4 border-pageBlue"
                  >
                    for Android
                  </h1>
                  <transition mode="out-in" name="slide-fade">
                    <img
                      v-show="selectedApp === 'android'"
                      src="~/assets/images/AppPage/select_download.svg"
                      class="absolute selections w-44 -left-3 z-10"
                    />
                  </transition>
                </div>
                <img
                  @click="selectedApp = 'android'"
                  src="~/assets/images/AppPage/download_android.svg"
                  class="ml-10 w-24 h-24 cursor-pointer icons"
                />
              </div>
              <div class="flex mt-8">
                <div
                  @click="selectedApp = 'ios'"
                  class=" relative flex items-center apps cursor-pointer mx-10 w-48"
                >
                  <h1
                    style="font-size: 30px"
                    class="border-b-4 border-pageBlue"
                  >
                    for iOS
                  </h1>
                  <transition mode="out-in" name="slide-fade">
                    <img
                      v-show="selectedApp === 'ios'"
                      src="~/assets/images/AppPage/select_download.svg"
                      class="absolute selections ios w-32 -left-3 z-10"
                    />
                  </transition>
                </div>
                <img
                  @click="selectedApp = 'ios'"
                  src="~/assets/images/AppPage/download_ios.svg"
                  class="ml-10 w-24 h-24 cursor-pointer icons"
                />
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
import EventBus from '@/helpers/EventBus'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'download',
  layout: 'homeDefault',
  components: { Conductor },
  computed: {
    ...mapGetters('dialog', ['getConductorButtonText'])
  },
  data: () => ({
    options: {
      penColor: '#016189',
      minWidth: 1,
      maxWidth: 1,
      backgroundColor: 'rgba(0,0,0,0.1)'
    },
    selectedApp: null,
    hideSignHere: true,
    date: new Date()
  }),
  created() {
    this.changeConductorButtonText('')
    EventBus.$on('buttonClicked', this.download)
  },
  beforeDestroy() {
    console.log('mta')
    EventBus.$off('buttonClicked', this.download)
  },
  watch: {
    selectedApp(newVal) {
      this.select(newVal)
    }
  },
  methods: {
    ...mapActions('dialog', ['changeConductorButtonText']),
    onBegin() {
      this.hideSignHere = false
    },
    download() {
      // if (this.getConductorButtonText) {
      //   alert('download!' + this)
      // }
    },
    select(value) {
      if (value) {
        this.changeConductorButtonText('Coming Soon')
      }
    }
  }
}
</script>

<style scoped>
.rightWrapper {
  z-index: 1;
  width: 90%;
  min-height: 650px;
  max-height: 80%;
  width: 550px;
  border-top-right-radius: 30px;
  border-style: inset;
  border-bottom-right-radius: 30px;
  box-shadow: 0 0 0 2px #016189, 0 0 0 5px #f3f1f1, 0 0 0 8px #016189;
  /* margin-bottom: 50px; */
}
.leftWrapper {
  line-height: 50px;
}
.leftWrapper > * {
  line-height: 16px;
}
.leftWrapper > *:not(.notHaveB):not(img),
.leftWrapper input {
  border-bottom: 3px solid #016189;
  outline: none;
}
.leftWrapper > input,
.leftWrapper > span > input {
  height: 30px;
  padding: 0 5px;
}
input.address {
  max-width: 300px;
  width: 100%;
}

@media screen and (max-width: 1294px) {
  .rightWrapper {
    margin: 0 !important;
    /* height: 100%; */
    max-height: 90%;
  }
  .base {
    display: block;
  }
  .signContractsWrapper {
    padding: 60px !important;
  }
}
@media screen and (max-width: 582px) {
  .rightWrapper {
    width: auto;
    min-height: auto !important;
    max-height: none !important;
    height: auto !important;
  }
  .rightWrapper > div:first-child {
    padding: 0 10px;
  }
  .icons {
    width: 50px;
    height: 50px;
    margin: 0 !important;
  }
  .signContractsWrapper {
    padding: 20px !important;
  }
  .signContractsWrapper h1 {
    font-size: 20px !important;
  }
  .apps {
    margin: 0 !important;
  }
  .apps h1 {
    font-size: 16px !important;
  }
  .address {
    margin: 0 !important;
  }
  .rightSide {
    padding: 10px;
    height: auto !important;
  }
  .selections {
    width: 60%;
  }
  .selections.ios {
    width: 40%;
  }
}
</style>
