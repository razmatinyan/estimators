<template>
  <div class="h-full flex flex-col">
    <p class="text-center font-bold text-3xl pt-4 pb-1 px-2 headingText">
      Get in touch helps us to understand you better
    </p>
    <div class="w-full flex-1 flex items-center flex-wrap conWrapper">
      <div class="flex-1 z-10">
        <form
          @submit.prevent
          class="m-auto pl-5 pr-2 flex flex-col left"
          style="height: 484px;"
        >
          <p class="text-center text-3xl mb-1">Follow us in</p>
          <div class="socialLinks flex h-10 justify-center mb-3">
            <a
              href="https://www.linkedin.com/company/itestimators/"
              target="_blank"
              class="mx-2 cursor-pointer h-full w-auto"
            >
              <img src="~/assets/images/Socials/linkedin2.svg" class="h-full" />
            </a>
            <a
              href="https://www.facebook.com/itestimators/"
              target="_blank"
              class="mx-2 cursor-pointer h-full w-auto"
            >
              <img src="~/assets/images/Socials/facebook.svg" class="h-full" />
            </a>
            <a
              href="https://www.instagram.com/itestimators/"
              target="_blank"
              class="mx-2 cursor-pointer h-full w-auto"
            >
              <img src="~/assets/images/Socials/instagram.svg" class="h-full" />
            </a>
            <!-- <a
              href="https://twitter.com/itstimators"
              target="_blank"
              class="mx-2 cursor-pointer h-full w-auto"
            >
              <img src="~/assets/images/Socials/twitter.svg" class="h-full" />
            </a> -->
          </div>
          <div class="flex flex-wrap">
            <div class="flex flex-1 flex-col p-1">
              <label for="name"
                ><span class="text-red-500">*</span> First Name</label
              >
              <input
                class="p-1 border-2"
                type="text"
                v-model="name"
                :class="[nameNotValid ? 'border-pageRed' : 'border-pageBlue']"
                id="name"
              />
            </div>
            <div class="flex flex-1 flex-col p-1">
              <label for="lname"
                ><span class="text-red-500">*</span> Last Name</label
              >
              <input
                class="p-1 border-2"
                v-model="lname"
                :class="[lnameNotValid ? 'border-pageRed' : 'border-pageBlue']"
                type="text"
                id="lname"
              />
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="flex flex-1 flex-col p-1">
              <label for="phone"
                ><span class="text-red-500">*</span> Phone</label
              >
              <input
                class="p-1 border-2"
                v-model="phone"
                :class="[phoneNotValid ? 'border-pageRed' : 'border-pageBlue']"
                type="text"
                id="phone"
              />
            </div>
            <div class="flex flex-1 flex-col p-1">
              <label for="email"
                ><span class="text-red-500">*</span> Email</label
              >
              <input
                class="p-1 border-2"
                type="text"
                v-model="email"
                :class="[emailNotValid ? 'border-pageRed' : 'border-pageBlue']"
                id="email"
              />
            </div>
          </div>
          <div class="p-1 flex flex-col flex-1">
            <label for="message"
              ><span class="text-red-500">*</span> Message</label
            >
            <textarea
              id="message"
              v-model="message"
              :class="[messageNotValid ? 'border-pageRed' : 'border-pageBlue']"
              class="w-full flex-1 resize-none p-1 border-2"
            ></textarea>
          </div>
        </form>
      </div>
      <div class="flex-1 pl-2 pr-5 right">
        <div>
          <div class="flex justify-center flex-wrap">
            <div class="flex flex-col items-center">
              <span
                class="text-2xl cursor-pointer"
                :class="{ underline: selectedCountry === 'USA' }"
                @click="selectedCountry = 'USA'"
              >
                USA
              </span>
              <div class="flex items-center m-1">
                <div class="px-1 h-10 w-10">
                  <img
                    src="~/assets/images/ContactsImg/email.svg"
                    class="h-full"
                  />
                </div>
                <p class="text-lg">us.itestimators@gmail.com</p>
              </div>
            </div>
            <div class="flex flex-col items-center">
              <span
                class="text-2xl cursor-pointer"
                :class="{ underline: selectedCountry === 'Armenia' }"
                @click="selectedCountry = 'Armenia'"
              >
                Armenia
              </span>
              <div class="flex items-center m-1">
                <div class="px-1 h-10 w-10">
                  <img
                    src="~/assets/images/ContactsImg/email.svg"
                    class="h-full"
                  />
                </div>
                <p class="text-lg">itestimators@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <GmapMap
          :center="coordinates"
          :zoom="15"
          map-type-id="roadmap"
          style="width: 100%; height: 400px"
        >
          <GmapMarker :position="coordinates" />
        </GmapMap>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '@/helpers/EventBus'
import { mapActions } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'contact',
  layout: 'homeDefault',

  data() {
    return {
      name: '',
      email: '',
      phone: '',
      lname: '',
      message: '',
      selectedCountry: 'USA',
      loading: false,
      nameNotValid: false,
      emailNotValid: false,
      lnameNotValid: false,
      phoneNotValid: false,
      messageNotValid: false,
      coordinates: { lat: 34.16897693428418, lng: -118.60675896608839 }
    }
  },
  created() {
    this.changeConductorButtonText('Send')
    EventBus.$on('buttonClicked', this.submitMessage)
  },
  beforeDestroy() {
    console.log('mta')
    EventBus.$off('buttonClicked', this.submitMessage)
  },
  mounted() {},
  watch: {
    selectedCountry(val) {
      if (val === 'USA') {
        this.coordinates = { lat: 34.16897693428418, lng: -118.60675896608839 }
      } else {
        this.coordinates = { lat: 40.19886771977364, lng: 44.528404328016144 }
      }
    },
    name() {
      this.nameNotValid = false
    },
    lname() {
      this.lnameNotValid = false
    },
    email() {
      this.emailNotValid = false
    },
    phone() {
      this.phoneNotValid = false
    },
    message() {
      this.messageNotValid = false
    }
  },
  methods: {
    ...mapActions('dialog', ['changeConductorButtonText', 'getInTouch']),
    async submitMessage() {
      if (!this.name) this.nameNotValid = true
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!this.email || !re.test(String(this.email).toLowerCase()))
        this.emailNotValid = true
      if (!this.message) this.messageNotValid = true
      if (!this.phone) this.phoneNotValid = true
      if (!this.lname) this.lnameNotValid = true
      if (
        this.nameNotValid ||
        this.emailNotValid ||
        this.messageNotValid ||
        this.phoneNotValid ||
        this.lnameNotValid
      ) {
        return
      }
      const request = {
        firstName: this.name,
        lastName: this.lname,
        email: this.email,
        phone: this.phone,
        message: this.message,
        agree: true
      }

      try {
        Swal.showLoading()
        const res = await this.getInTouch(request)
        this.successmsg()
      } catch (e) {
        let msg = 'Something went wrong.'
        if (e?.response?.status == '404') {
          msg = 'User already exists.'
        }
        this.errormsg(msg)
      }

      this.name = ''
      this.lname = ''
      this.email = ''
      this.phone = ''
      this.message = ''
    },
    successmsg() {
      Swal.fire({
        title: 'Thank you!',
        text: 'Message was successfully sent!',
        type: 'success',
        confirmButtonClass: 'btn btn-confirm mt-2'
      })
    },
    errormsg(msg) {
      // Swal.fire({
      //   type: 'error',
      //   title: 'Oops...',
      //   text: msg,
      //   confirmButtonClass: 'btn btn-confirm mt-2'
      // })
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: msg,
        showConfirmButton: false,
        timer: 2000
      })
    }
  }
}
</script>

<style lang="scss" scoped>
input,
textarea {
  outline: none;
}

.headingText {
  transition: all 0.2s;
}
@media screen and (max-width: 1100px) {
  .conWrapper {
    display: block;
    .left,
    .right {
      padding: 0 72px 20px !important;
    }
    .left {
      height: auto !important;
    }
  }
}
@media screen and (max-width: 582px) {
  .headingText {
    font-size: 25px;
  }
  .conWrapper {
    .left,
    .right {
      padding: 0 10px 10px !important;
    }
  }
}
</style>
