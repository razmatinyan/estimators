<template>
  <div class="rightWrapper relative flex flex-col items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-full absolute"
      xml:space="preserve"
      version="1.0"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd; "
      viewBox="0 0 148.67 172.16"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
    >
      <defs>
        <style type="text/css">
          .str0 {
            stroke: #016189;
            stroke-width: 0.81;
            stroke-miterlimit: 2.61313;
          }
          .fil1 {
            fill: none;
          }
          .fil2 {
            fill: #fefefe;
          }
          .fil0 {
            fill: #016189;
          }
        </style>
      </defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer" />
        <path
          class="fil1 str0 path0"
          :class="{ anim: mayAnimate }"
          d="M71.44 0.4l61.81 0c8.25,0 15.01,5.56 15.01,12.35l0 146.65c0,6.79 -6.75,12.37 -15.01,12.35l-130.72 -0.29m69.72 -1.4l-69.94 0 0 -167.72 69.25 0m0 0l60.25 0c4.21,0 8.92,1.39 11.62,3.83 2.38,2.15 3.01,5.14 3.01,8.25l0 143.55c0,3.4 -1,6.98 -3.75,9.18 -2.64,2.11 -6.95,2.91 -10.88,2.91l-59.56 0m-71.86 -0.12l0 -169.54 71.04 0"
        />
        <template v-if="!getSecondPageActive && $mq === 'lg'">
          <path
            class="fil0"
            d="M3 21.27l141.25 0 0 40.54 -141.25 0 0 -40.54z"
          />
          <circle class="fil2" cx="6.44" cy="25.97" r="1.26" />
          <circle class="fil2" cx="6.44" cy="35.64" r="1.26" />
          <circle class="fil2" cx="6.44" cy="45.32" r="1.26" />
          <circle class="fil2" cx="6.44" cy="54.99" r="1.26" />
        </template>
      </g>
    </svg>
    <div class="absolute forStickerWrapper pr-10 mr-10">
      <div class="absolute right-0 text-black" style="top: 15%">
        <div
          v-for="(cat, i) in getSelectedCategs"
          :key="i"
          class="relative cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-full"
            xml:space="preserve"
            version="1.0"
            style=" width: 2vw; shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
            viewBox="0 0 0.76 1.52"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
          >
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <path
                :style="`fill: ${getColor(cat)}`"
                d="M0.76 1.29c-0,-0.36 -0.01,-0.72 -0.01,-1.09 -0.03,-0.07 -0.07,-0.15 -0.18,-0.16l-0.57 -0.04 0 1.52 0.62 -0.06c0.09,-0.04 0.12,-0.09 0.14,-0.17z"
              />
            </g>
          </svg>
          <span
            class="absolute top-0 right-2 select-none hover:text-white"
            @click="removeCat(cat)"
            >&times;</span
          >
        </div>
      </div>
    </div>
    <!-- <transition name="slide-fade" mode="out-in"> -->
    <div
      style="height: 80vh;"
      class="inner h-40 py-3 pt-4 flex flex-col text-white font-bold relative"
      v-if="!getSecondPageActive"
      key="first"
    >
      <div
        class="testWrapper transition-all top flex flex-col-reverse flex-3"
        :class="[
          { 'bg-pageBlue': $mq !== 'lg' },
          $mq !== 'lg' ? 'h-1/5' : 'h-1/3'
        ]"
      >
        <span
          >Sign up for a free consultation and find out the estimation of the
          cost and the required time to develop your project</span
        >
        <span class="uppercase transition-all">
          Estimators
        </span>
      </div>
      <div
        class="w-full flex items-center flex-col flex-auto"
        :class="[$mq !== 'lg' ? ' h-4/5' : ' h-2/3']"
      >
        <!-- { 'justify-end': $mq !== 'lg' }, -->
        <div class="w-11/12 h-80 pt-4">
          <AppSelection v-if="$mq !== 'lg'" />

          <div v-for="i in $mq === 'lg' ? 9 : 4" :key="i">
            <div style="height: 4vh;">
              <div
                v-if="i === 2"
                class="relative flex items-center h-full"
                @mouseover="hoverTo(i)"
                @mouseleave="hoverTo(null)"
                @click="selectProject('idea')"
              >
                <img
                  src="../assets/images/TeamMembersImg/Select arrow.svg"
                  style="transform: translateY(-18%)"
                  class="w-1/3 absolute top-0 opacity-10 cursor-pointer"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-1/3 absolute top-0 cursor-pointer "
                  xml:space="preserve"
                  version="1.0"
                  style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd; transform: translateY(-18%)"
                  viewBox="0 0 10.79 4.88"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
                >
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      :class="{
                        anim: hovered === i || getSelectedProject === 'idea'
                      }"
                      class="fil01 str01 path0"
                      d="M1.66 1.17c0.93,-0.59 2.19,-1.12 3.74,-1.12 2.95,0 5.34,1.17 5.34,2.61 0,1.44 -2.45,2.16 -5.41,2.16 -2.96,0 -5.28,-0.72 -5.28,-2.16 0,-0.69 0.54,-1.31 1.43,-1.78"
                    />
                  </g>
                </svg>
                <span
                  class="text-black text-center w-1/3"
                  :class="[$mq === 'lg' ? 'notes' : 'notesMD']"
                  >I have an idea</span
                >
              </div>
              <div
                v-if="i === ($mq === 'lg' ? 5 : 3)"
                @mouseover="hoverTo(i)"
                @mouseleave="hoverTo(null)"
                @click="selectProject('product')"
                class="relative flex items-center h-full"
                :class="$mq === 'lg' ? 'justify-center' : 'justify-end'"
              >
                <img
                  src="../assets/images/TeamMembersImg/Select arrow.svg"
                  style="transform: translateY(-25%)"
                  class="w-2/5 absolute top-0 opacity-10 cursor-pointer"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-2/5 absolute top-0 cursor-pointer "
                  xml:space="preserve"
                  version="1.0"
                  style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd; transform: translateY(-25%)"
                  viewBox="0 0 10.79 4.88"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
                >
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      :class="{
                        anim: hovered === i || getSelectedProject === 'product'
                      }"
                      class="fil01 str01 path0"
                      d="M1.66 1.17c0.93,-0.59 2.19,-1.12 3.74,-1.12 2.95,0 5.34,1.17 5.34,2.61 0,1.44 -2.45,2.16 -5.41,2.16 -2.96,0 -5.28,-0.72 -5.28,-2.16 0,-0.69 0.54,-1.31 1.43,-1.78"
                    />
                  </g>
                </svg>
                <span
                  class="text-black text-center w-2/5"
                  :class="[$mq === 'lg' ? 'notes' : 'notesMD']"
                  >I have a product</span
                >
              </div>
              <div
                v-if="i === ($mq === 'lg' ? 8 : 4)"
                @mouseover="hoverTo(i)"
                @mouseleave="hoverTo(null)"
                @click="selectProject('support')"
                class="relative flex items-center h-full"
              >
                <img
                  src="../assets/images/TeamMembersImg/Select arrow.svg"
                  style="transform: translateY(-25%)"
                  class="w-1/3 absolute top-0 opacity-10 cursor-pointer"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-1/3 absolute top-0 cursor-pointer "
                  xml:space="preserve"
                  version="1.0"
                  style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd; transform: translateY(-25%)"
                  viewBox="0 0 10.79 4.88"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
                >
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      :class="{
                        anim: hovered === i || getSelectedProject === 'support'
                      }"
                      class="fil01 str01 path0"
                      d="M1.66 1.17c0.93,-0.59 2.19,-1.12 3.74,-1.12 2.95,0 5.34,1.17 5.34,2.61 0,1.44 -2.45,2.16 -5.41,2.16 -2.96,0 -5.28,-0.72 -5.28,-2.16 0,-0.69 0.54,-1.31 1.43,-1.78"
                    />
                  </g>
                </svg>
                <span
                  class="text-black text-center w-1/3"
                  :class="[$mq === 'lg' ? 'notes' : 'notesMD']"
                  >I need support</span
                >
              </div>
            </div>
            <hr class="w-full" style="border-color:#841f3b" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="secondWrapper z-10 flex flex-col inner py-1"
      v-else
      key="second"
    >
      <div>
        <p style="font-size: 20px" class="font-bold text-pageRed  pl-2 pr-2">
          Get in touch helps us to understand you better
        </p>
        <div class="flex pt-3  pl-2 pr-2">
          <div class="flex-1 pr-1">
            <Select
              class="mb-2"
              v-model="secondForm.requestType"
              :options="secondForm.requestTypeOptions"
              label="Request type"
            />
            <Select
              class="mt-3 mb-2"
              v-model="secondForm.frontTech"
              :options="secondForm.frontTechOptions"
              multiple
              label="Frontend technology"
            />
            <Select
              class="mt-3 mb-2"
              v-model="secondForm.backTech"
              :options="secondForm.backTechOptions"
              multiple
              label="Backend technology"
            />
          </div>
          <div class="flex-1 flex flex-col justify-start">
            <Select
              class="mb-0"
              v-model="secondForm.mobTech"
              :options="secondForm.mobTechOptions"
              multiple
              label="Mobile technology"
            />
            <Select
              class="mt-3 mb-2"
              v-model="secondForm.deskTech"
              :options="secondForm.deskTechOptions"
              multiple
              label="Desktop technology"
            />
          </div>
        </div>
        <label
          for="files"
          style="border-width: 1px"
          class="fileUpload flex justify-between border-dotted border-black p-3 cursor-pointer select-none  ml-4 mr-4 mt-2"
          @dragover.prevent="dragover"
          @dragleave="dragleave"
          @drop.prevent="drop"
        >
          <div class="flex flex-wrap justify-center w-full">
            <div>
              <img
                src="../assets/images/TeamMembersImg/brouse file1.svg"
                class="w-5 mr-2"
              />
              <span>Drag & Drop or</span>
            </div>
            <div>
              <img
                src="../assets/images/TeamMembersImg/brouse file2.svg"
                class="w-5 mr-2 ml-2"
              />
              <span>Browse Files</span>
            </div>
          </div>
          <div class="flex items-center">
            <div
              v-for="file in secondForm.files"
              :key="file.name"
              class="pr-2 pl-2 relative"
              :title="file.name"
            >
              <img
                src="../assets/images/TeamMembersImg/brouse file2.svg"
                class="w-5 "
              />
              <span
                @click.prevent="removeFile(file)"
                class="absolute -top-2 -right-1 bg-white rounded-full w-4 h-4 p-0 m-0 text-center"
                style="line-height: 18px;"
                >&times;</span
              >
            </div>
          </div>
          <span v-show="secondForm.files.length" class="text-pageRed">{{
            secondForm.files.length
          }}</span>
          <input
            class="hidden"
            ref="file"
            multiple
            type="file"
            id="files"
            @change="onFileChange"
          />
        </label>
        <div class=" pl-2 pr-2">
          <hr class="w-full secondInput mt-2 mb-2 " />
          <input
            class="border-red-500 w-full bg-transparent secondInput mb-1"
            placeholder="Company Name"
            v-model="$v.companyName.$model"
          />
          <hr class="w-full secondInput mt-6 mb-1 " />
        </div>
        <div class="flex  pl-2 pr-2">
          <div class="flex-1 pr-2">
            <input
              class="border-red-500 w-full bg-transparent secondInput mb-1"
              placeholder="First Name"
              v-model="$v.firstName.$model"
            />
            <hr class="w-full secondInput mt-6 mb-1 " />
            <input
              class="border-red-500 w-full bg-transparent secondInput mb-2"
              placeholder="Last Name"
              v-model="$v.lastName.$model"
            />
          </div>
          <div class="flex-1 pl-2">
            <input
              class="border-red-500 w-full bg-transparent secondInput mb-1"
              placeholder="Country"
              v-model="country"
            />
            <hr class="w-full secondInput mt-6 mb-1 " />
            <input
              class="border-red-500 w-full bg-transparent secondInput mb-2"
              placeholder="Phone"
              v-model="$v.phone.$model"
            />
          </div>
        </div>
        <div class=" pl-2 pr-2">
          <input
            class="border-red-500 w-full bg-transparent secondInput mb-2"
            v-model="$v.email.$model"
            placeholder="Email"
          />
        </div>
      </div>
      <div class=" flex-1 pl-2 pr-2">
        <textarea
          class="w-full mt-2 h-auto textareaBorder h-full p-2"
          placeholder="Message"
          v-model="$v.message.$model"
        ></textarea>
      </div>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
import Select from './Select'
import AppSelection from './AppSelection.vue'
import Swal from 'sweetalert2'
import { mapGetters, mapActions, mapMutations } from 'vuex'

import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  components: { AppSelection, Select },
  data() {
    return {
      loading: false,
      intervalID: null,
      mayAnimate: true,
      hovered: null,
      email: '',
      message: '',
      phone: '',
      firstName: '',
      lastName: '',
      companyName: '',
      country: '',
      colors: {
        web_app: '#5FF000',
        android_ios: '#FCC006',
        watch_os: '#42B4FD',
        desktop_app: '#EC008B',
        ios: '#FC5721',
        android: '#6539B5'
      },
      //
      secondForm: {
        requestType: 'PERSONAL',
        requestTypeOptions: [
          // { id: null, name: 'Please select' },
          { id: 'COMMERCIAL', name: 'Commercial' },
          { id: 'PERSONAL', name: 'Personal' }
        ],
        frontTech: [],
        frontTechOptions: [],
        backTech: [],
        backTechOptions: [],
        mobTech: [],
        mobTechOptions: [],
        deskTech: [],
        deskTechOptions: [],
        files: []
      }
    }
  },
  mounted() {
    this.mayAnimate = true
  },
  watch: {
    getSelectedProject(val) {
      this.$emit('select', val)
    },
    loading(val) {
      if (val) {
        Swal.fire({
          title: 'Please wait',
          html:
            '<div style="margin: 0 auto;  border: 8px solid #f3f3f3; border-radius: 50%; border-top: 8px solid #3498db; width: 60px; height: 60px; -webkit-animation: spin 2s linear infinite; animation: spin 2s linear infinite;" />',
          showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          didOpen: () => {
            Swal.showLoading()
            this.intervalID = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          }
        })
      } else {
        clearInterval(this.intervalID)
      }
    }
  },
  created() {
    // this.getTechnologies('FRONTEND').then(
    //   res => (this.secondForm.frontTechOptions = res)
    // )
    // this.getTechnologies('BACKEND').then(
    //   res => (this.secondForm.backTechOptions = res)
    // )
    // this.getTechnologies('MOBILE').then(
    //   res => (this.secondForm.mobTechOptions = res)
    // )
    // this.getTechnologies('DESKTOP').then(
    //   res => (this.secondForm.deskTechOptions = res)
    // )
  },
  methods: {
    ...mapActions('dialog', [
      'getTechnologies',
      'isCheck',
      'setActiveCat',
      'toggleRightMenu',
      'changeConductorButtonText',
      'sendProject'
    ]),
    ...mapMutations('dialog', { selectProject: 'SET_SELECTED_PROJECT' }),
    errormsg(msg, config = {}) {
      return Swal.fire({
        position: 'center',
        html: msg,
        showConfirmButton: true,
        ...config
      })
    },
    successmsg() {
      return Swal.fire({
        title: 'Thank you!',
        text: 'Request was successfully sent!',
        type: 'success',
        confirmButtonClass: 'btn btn-confirm mt-2'
      })
    },
    async sendData() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        let msg = '<ol>'
        if (this.$v.firstName.$anyError) {
          msg +=
            '<li>First name required and must contain more than 4 characters.</li>'
        }
        if (this.$v.lastName.$anyError) {
          msg +=
            '<li>Last name required and must contain more than 4 characters.</li>'
        }
        if (this.$v.email.$anyError) {
          msg += '<li>Email is not valid.</li>'
        }
        if (this.$v.phone.$anyError) {
          msg += '<li>Phone is required.</li>'
        }
        if (this.$v.message.$anyError) {
          msg += '<li>Message is required.</li>'
        }
        msg += '</ol>'
        await this.errormsg(msg)
        return
      }
      const back = this.secondForm.backTech.map(tech => ({
        id: tech.id
      }))
      const desk = this.secondForm.deskTech.map(tech => ({
        id: tech.id
      }))
      const front = this.secondForm.frontTech.map(tech => ({
        id: tech.id
      }))
      const mobil = this.secondForm.mobTech.map(tech => ({
        id: tech.id
      }))

      const request = {
        consumer: {
          file: [],
          backendTechnology: back.length
            ? back
            : [
                {
                  id: this.secondForm.backTechOptions.find(
                    option => option.name === 'Not Sure'
                  )?.id
                }
              ],
          companyName: this.companyName,
          country: this.country,
          desktopTechnology: desk.length
            ? desk
            : [
                {
                  id: this.secondForm.deskTechOptions.find(
                    option => option.name === 'Not Sure'
                  )?.id
                }
              ],
          email: this.email,
          firstName: this.firstName,
          frontendTechnology: front.length
            ? front
            : [
                {
                  id: this.secondForm.frontTechOptions.find(
                    option => option.name === 'Not Sure'
                  )?.id
                }
              ],
          lastName: this.lastName,
          message: this.message,
          mobileTechnology: mobil.length
            ? mobil
            : [
                {
                  id: this.secondForm.mobTechOptions.find(
                    option => option.name === 'Not Sure'
                  )?.id
                }
              ],
          requestType: this.secondForm.requestType,
          telephone: this.phone
        },
        workingPlatforms: this.getSelectedCategs.map(cat => ({
          id: this.paltformsGetter.find(plat =>
            cat.toLowerCase().startsWith(plat?.name?.substr(0, 3).toLowerCase())
          )?.id
        })),
        workingProjectsType: this.getSelectedProject?.toUpperCase()
      }
      console.log(request)
      try {
        this.loading = true
        await this.sendProject({ request, files: this.secondForm.files })
        // await this.$axios.$post('path', request)
        this.loading = false
        this.successmsg()
        this.$emit('select', null)
        this.$store.commit('dialog/CLEAR_DIALOGS')
        this.clear()
      } catch (error) {
        console.log(error?.response ?? error)
        this.loading = false
        this.errormsg('', {
          icon: 'error',
          title: 'Something went wrong.',
          showConfirmButton: false,
          timer: 2000
        })
      }
    },
    clear() {
      this.email = ''
      this.message = ''
      this.phone = ''
      this.firstName = ''
      this.lastName = ''
      this.companyName = ''
      this.country = ''
      Object.assign(this.secondForm, {
        requestType: 'PERSONAL',
        frontTech: [],
        backTech: [],
        mobTech: [],
        deskTech: [],
        files: []
      })
    },
    removeFile(file) {
      const index = this.secondForm.files.indexOf(file)
      console.log(file, index)
      this.secondForm.files.splice(index, 1)
    },
    dragover(event) {
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains('bg-green-300')) {
        event.currentTarget.classList.remove('bg-gray-100')
        event.currentTarget.classList.add('bg-green-300')
      }
    },
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.add('bg-gray-100')
      event.currentTarget.classList.remove('bg-green-300')
    },
    drop(event) {
      this.$refs.file.files = event.dataTransfer.files
      this.onFileChange(event) // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add('bg-gray-100')
      event.currentTarget.classList.remove('bg-green-300')
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      if (files.length + this.secondForm.files.length > 2) {
        alert('Plase upload not more then 2 files')
        return
      }
      this.secondForm.files.push(...files)
    },
    hoverTo(i) {
      this.hovered = i
    },
    getColor(i) {
      return this.colors[i]
    },
    removeCat(which) {
      this.isCheck(which)
      // console.log(which, this.getActiveCat)
      // if (which === this.getActiveCat) {
      console.log(this.getSelectedCategs)
      if (!this.getSelectedCategs.length) {
        console.log('mta')
        this.setActiveCat('')
        this.changeConductorButtonText('')
        this.toggleRightMenu(false)
        this.clear()
        return
      }
      this.setActiveCat(this.getSelectedCategs[0])
      // }
    }
  },
  computed: {
    ...mapGetters('dialog', [
      'getActiveCat',
      'getSelectedCategs',
      'getRightMenuIsOpened',
      'getSecondPageActive',
      'getSelectedProject',
      'paltformsGetter'
    ])
  },

  validations: {
    firstName: {
      required,
      minLength: minLength(4)
    },
    lastName: {
      required,
      minLength: minLength(4)
    },
    companyName: {
      required,
      minLength: minLength(3)
    },
    email: {
      required,
      email
    },
    phone: {
      required
    },
    message: {
      required
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1250px) {
  .inner .top span:first-child {
    font-size: 18px !important;
  }
}
@media screen and (max-width: 545px) {
  .inner {
    /* background-image: url('../assets/images/TeamMembersImg/bglines.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%; */
    /* border: 2px double #016189; */
    border-top-right-radius: 30px;
    border-style: inset;
    border-bottom-right-radius: 30px;
    box-shadow: 0 0 0 2px #016189, 0 0 0 5px #f3f1f1, 0 0 0 8px #016189;
    margin-bottom: 50px;
  }
  .rightWrapper > svg {
    display: none;
  }
  /* .testWrapper {
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
  } */
  .testWrapper > span:last-child {
    font-size: 30px !important;
  }
  .testWrapper > span:first-child {
    font-size: 11px !important;
  }
  .notesMD {
    font-size: 12px !important;
  }
  .forStickerWrapper > div {
    /* right: 0; */
    transform: translateX(50%) !important;
  }
}

@media screen and (max-width: 655px) {
  .rightWrapper {
    /* height: 88%; */
    width: 90% !important;
    /* margin-top: 30px; */
    /* width: 60%; */
  }
  .rightWrapper > svg {
    /* display: none; */
    width: 95% !important;
  }
}
@media screen and (max-width: 655px) and (min-width: 545px) {
  .forStickerWrapper > div {
    /* right: 0; */
    transform: translateX(60%);
  }
}
.textareaBorder {
  border: 2px solid #016189;
  border-radius: 20px;
  outline: none;
  border-bottom-left-radius: 0;
}
.secondInput {
  border-bottom: 2px solid #841f3b;
  outline: none;
}
.str01 {
  stroke: #373435;
  stroke-width: 0.11;
  stroke-miterlimit: 2.61313;
}
.fil01 {
  fill: none;
}
.path0 {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
}
.path1 {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
}

/* .notesMD {
  font-size: 1.8vw;
}
.notes {
  font-size: 0.9vw;
} */
.secondWrapper {
  /* height: ; */

  min-height: 600px;
  max-height: 80%;
}
.rightWrapper {
  height: 88%;
  width: 100%;
  margin-top: 30px;
  /* width: 60%; */
}
.forStickerWrapper svg {
  width: 37px;
  min-width: 37px;
  height: 80px;
  min-height: 80px;
  /* width: auto; */
}
.forStickerWrapper > div {
  /* right: 0; */
  transform: translateX(32%);
}
.rightWrapper > svg,
.forStickerWrapper {
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 100%;
  min-height: 650px;
  max-height: 80%;
  max-width: 600px;
}
.inner {
  z-index: 1;
  width: 90%;
  min-height: 600px;
  max-height: 80%;
  max-width: 550px;
}
.inner .top span:first-child {
  padding: 0 17px 17px 30px;
  font-size: 13px;
}
.inner .top span:last-child {
  padding: 0 0 0 30px;
  font-size: 40px;
  line-height: 40px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
