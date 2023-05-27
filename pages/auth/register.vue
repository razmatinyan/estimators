<script>
/**
 * Register-2 component
 */
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from 'assets/js/logo-lottie.json'
import Social from '~/components/Social.vue'
import social from '~/helpers/socialConfig'
import mapper from '~/helpers/mapper'
import Swal from 'sweetalert2'
import { mapActions, mapGetters } from 'vuex'

import {
  required,
  minLength,
  email,
  requiredIf
} from 'vuelidate/lib/validators'

export default {
  head() {
    return {
      title: `Sign Up | ESTIMATORS`
    }
  },
  data() {
    return {
      lottieOptions: { animationData: animationData.default },
      passowrdType: 'password',
      secondPageErrors: false,
      selectedTechnologies: [],
      notAccepted: false,
      showCompanyName: false,
      phoneError: false,
      addressError: false,
      loading: false,
      pageNumber: 1,

      userInfo: {
        name: '',
        email: '',
        profileType: '',
        companyName: '',
        password: '',
        accept: false,
        additionalSkills: '',
        phone: '',
        address: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        phoneCode: '+1'
      },
      selectedLevels: '',
      selectedWorkTypes: [],
      socials: {
        linkedIn: '',
        gitHub: '',
        gitLab: '',
        behance: '',
        dribbble: '',
        facebook: '',
        twitter: ''
      },
      levels: ['Junior', 'Middle', 'Senior', 'Not sure'],
      workTypes: [
        'Part time',
        'Full time',
        'By project',
        'Free plane',
        'Not sure'
      ]
    }
  },
  created() {
    this.getSenioritys()
  },
  components: {
    lottie,
    Social
  },
  watch: {
    'userInfo.accept'(val) {
      this.notAccepted = !val
    },
    'userInfo.profileType'(val) {
      this.showCompanyName = val === 'team' || val === 'company'
      this.userInfo.companyName = ''
      if (!this.isClient && !this.companyOrTeam) {
        this.getProfessions(mapper[val])
      }
    },
    'userInfo.address'(val) {
      this.addressError = !val
    }
  },
  methods: {
    ...mapActions('api', ['getProfessions', 'getSenioritys', 'register']),
    updatePhoneNumber(e) {
      try {
        this.userInfo.phoneCode = this.$refs?.phone?.$refs?.CountrySelector?.callingCode
      } catch (e) {}
    },
    hasError(arr) {
      return !arr.length && this.secondPageErrors
    },
    setPassowrdType(tpye) {
      setImmediate(() => (this.passowrdType = tpye))
    },
    prevPage() {
      if (this.userInfo.profileType === 'individual' || this.companyOrTeam) {
        this.pageNumber = 1
      } else {
        --this.pageNumber
      }
    },
    nextPage() {
      this.$v.$touch()
      if (!this.$v.$invalid && this.userInfo.accept) {
        if (this.userInfo.profileType === 'individual' || this.companyOrTeam) {
          this.pageNumber = 3
        } else {
          if (this.pageNumber === 2) {
            this.secondPageErrors = true
            if (
              this.selectedTechnologies.length &&
              this.selectedLevels.length &&
              this.selectedWorkTypes.length
            ) {
              ++this.pageNumber
            }
          } else {
            ++this.pageNumber
          }
        }
      } else {
        this.notAccepted = !this.userInfo.accept
      }
    },
    async submit() {
      if (!this.userInfo.phone) {
        this.phoneError = true
      }
      if (!this.userInfo.address) {
        this.addressError = true
      }
      if (!this.phoneError && !this.addressError) {
        this.loading = true
        const request = {
          phoneNumber: this.userInfo.phoneCode + this.userInfo.phone
        }
        const _nameArr = this.userInfo.name.split(' ')
        const firstname = _nameArr[0]
        let lastName = ''
        if (_nameArr.length > 1)
          for (let i = 1; i < _nameArr.length; ++i)
            lastName += _nameArr[i].trim() + (_nameArr[i] && ' ')
        lastName = lastName.trim()
        Object.assign(
          request,
          this.isClient
            ? {
                clientRequest: {
                  clientType: this.userInfo.profileType.toUpperCase(),
                  companyName: this.userInfo.companyName
                }
              }
            : {
                profileRequest: {
                  //if talent
                  professionsId: this.selectedTechnologies,
                  profileType: mapper[this.userInfo.profileType],
                  seniorityId: this.selectedLevels,
                  teamName: this.userInfo.companyName, //here
                  workTimeType: this.selectedWorkTypes.map(type => ({
                    workTimeType: mapper[type]
                  }))
                }
              }
        )
        Object.assign(request, {
          email: this.userInfo.email,
          firstname,
          lastName,
          links: this.socials,
          password: this.userInfo.password,
          role: this.isClient ? 'ROLE_CLIENT' : 'ROLE_PROFILE',
          location: {
            // aptSuite: this.userInfo.address,
            city: this.userInfo.city,
            country: this.userInfo.country,
            state: this.userInfo.state,
            streetAddress: this.userInfo.street,
            zipCode: this.userInfo.zip
          }
        })
        if (
          !this.isClient &&
          !this.companyOrTeam &&
          this.userInfo.additionalSkills
        ) {
          console.log('mtaa')
          Object.assign(request, {
            skills: this.userInfo.additionalSkills.split(',').map(skill => ({
              name: skill.trim()
            }))
          })
        }
        console.log(request)
        try {
          await this.register(request)
          this.loading = false
          await this.successmsg()
          this.$router.push('/auth/login')
        } catch (e) {
          this.loading = false
          let msg = 'Something went wrong.'
          console.log(Object.keys(e), e?.response)
          if (e?.response?.status == '404') {
            msg = 'User already exists.'
          }
          this.errormsg(msg)
        }
      }
    },
    getPhoneError() {
      console.log(this.$refs?.phone)
      this.phoneError = !this.$refs?.phone?.results?.isValid
    },
    successmsg() {
      return Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Please check your email.',
        showConfirmButton: false,
        timer: 2000
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
  },

  computed: {
    ...mapGetters('api', ['professions', 'senioritys']),
    getSocials() {
      if (this.userInfo.profileType === 'designer')
        return [social.linkedIn, social.behance, social.dribbble]
      else if (
        this.companyOrTeam ||
        this.userInfo.profileType === 'individual' ||
        this.userInfo.profileType === 'pm'
      )
        return [social.facebook, social.twitter, social.linkedIn]
      return [social.linkedIn, social.github, social.gitlab]
    },
    isClient() {
      return (
        this.userInfo.profileType === 'individual' ||
        this.userInfo.profileType === 'company'
      )
    },
    companyOrTeam() {
      return (
        this.userInfo.profileType === 'team' ||
        this.userInfo.profileType === 'company'
      )
    }
  },

  validations: {
    userInfo: {
      name: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        email
      },
      profileType: {
        required
      },
      password: {
        required,
        minLength: minLength(4)
      },
      companyName: {
        required: requiredIf(function() {
          return this.showCompanyName
        })
      }
    },
    socials: social.validator
  },

  layout: 'auth-2'
}
</script>

<template>
  <div class="flex h-full flex-col">
    <!-- Logo -->
    <div class="auth-brand text-center text-lg-left">
      <div class="auth-logo">
        <NuxtLink :to="localePath('/')">
          <lottie
            :width="90"
            :height="90"
            :options="lottieOptions"
            class="xl:h-44 xl:w-44 lg:h-28 lg:w-28 page-logo"
          />
        </NuxtLink>
      </div>
    </div>

    <!-- title-->
    <h4 class="mt-0">Sign Up</h4>
    <p class="text-muted mb-4">
      Don't have an account? Create your own account, it takes less than a
      minute
    </p>

    <div class="flex-1">
      <transition name="swap" mode="out-in">
        <div v-if="pageNumber === 1" :key="pageNumber">
          <div class="form-group">
            <label for="fullname">Full Name</label>
            <input
              class="form-control"
              type="text"
              id="fullname"
              placeholder="Enter your name"
              v-model.lazy="$v.userInfo.name.$model"
              :class="{ hasError: $v.userInfo.name.$anyError }"
            />
          </div>
          <div class="form-group">
            <label for="emailaddress">Email address</label>
            <input
              class="form-control"
              type="email"
              id="emailaddress"
              placeholder="Enter your email"
              :value="$v.userInfo.email.$model"
              @change="
                $v.userInfo.email.$model = $event.target.value.toLowerCase()
              "
              @input="userInfo.email = $event.target.value.toLowerCase()"
              :class="{ hasError: $v.userInfo.email.$anyError }"
            />
          </div>
          <div class="form-group">
            <label for="profiletype">Profile Type</label>
            <select
              class="form-control"
              id="profiletype"
              v-model="$v.userInfo.profileType.$model"
              :class="{ hasError: $v.userInfo.profileType.$anyError }"
            >
              <option value="" disabled selected
                >- - SELECT PROFILE TYPE - -</option
              >
              <optgroup label="Client">
                <option value="individual">Individual</option>
                <option value="company">Company</option>
              </optgroup>
              <optgroup label="Talent">
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="pm">Project Manager</option>
                <option value="qa">QA Specialist</option>
                <option value="designer">Designer</option>
                <option value="team">Team</option>
              </optgroup>
            </select>
          </div>
          <div class="form-group" v-if="showCompanyName">
            <label for="companyName"
              >{{
                userInfo.profileType === 'company' ? 'Company' : 'Team'
              }}
              Name</label
            >
            <input
              class="form-control"
              type="email"
              id="companyName"
              :placeholder="`Enter your ${userInfo.profileType} name`"
              v-model.lazy="$v.userInfo.companyName.$model"
              :class="{ hasError: $v.userInfo.companyName.$anyError }"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <div class="input-group input-group-merge">
              <input
                :type="passowrdType"
                id="password"
                class="form-control"
                placeholder="Enter your password"
                v-model.lazy="$v.userInfo.password.$model"
                :class="{ hasError: $v.userInfo.password.$anyError }"
              />
              <div
                class="input-group-append"
                data-password="false"
                @mousedown.left="setPassowrdType('text')"
                @mouseup.left="setPassowrdType('password')"
              >
                <div class="input-group-text">
                  <span class="password-eye"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="checkbox-signup"
                v-model="userInfo.accept"
              />
              <label class="custom-control-label" for="checkbox-signup">
                I accept
                <a
                  href="#"
                  target="_blank"
                  class="text-dark underline"
                  :class="{ errorText: notAccepted }"
                  >Terms and Conditions</a
                >
              </label>
            </div>
          </div>

          <!-- <div class="text-center mt-4">
        <h5 class="mt-0 text-muted">Sign Up using</h5>
        <ul class="social-list list-inline mt-3 mb-0">
          <li class="list-inline-item">
            <a
              href="javascript: void(0);"
              class="social-list-item border-purple text-purple"
            >
              <i class="mdi mdi-facebook"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              href="javascript: void(0);"
              class="social-list-item border-danger text-danger"
            >
              <i class="mdi mdi-google"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              href="javascript: void(0);"
              class="social-list-item border-info text-info"
            >
              <i class="mdi mdi-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              href="javascript: void(0);"
              class="social-list-item border-secondary text-secondary"
            >
              <i class="mdi mdi-github"></i>
            </a>
          </li>
        </ul>
      </div> -->
        </div>
        <div v-else-if="pageNumber === 2" :key="pageNumber">
          <div class="form-group">
            <label :class="{ errorText: hasError(selectedTechnologies) }"
              >What technologies do you know?</label
            >
            <div class="flex flex-wrap">
              <!-- technologies[userInfo.profileType] -->
              <div
                v-for="profession in professions"
                :key="profession.id"
                class="mr-3 custom-control custom-checkbox"
              >
                <input
                  type="checkbox"
                  :value="profession.id"
                  class="custom-control-input"
                  :id="profession.id"
                  v-model="selectedTechnologies"
                /><label :for="profession.id" class="custom-control-label">
                  {{ profession.name }}
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="skills">What additional skills do you have?</label>
            <textarea
              id="skills"
              class="w-full resize-y form-control px-1 rounded-sm "
              style="outline: none; max-height: 120px; min-height: 33px"
              placeholder="Skills"
              v-model="userInfo.additionalSkills"
            ></textarea>
          </div>
          <div class="form-group">
            <label :class="{ errorText: hasError(selectedLevels) }"
              >Select your seniority level.</label
            >
            <div class="flex flex-wrap">
              <!-- levels -->
              <div
                v-for="seniority in senioritys"
                :key="seniority.id"
                class="mr-3 custom-control custom-radio"
              >
                <input
                  :value="seniority.id"
                  type="radio"
                  class="custom-control-input"
                  :id="seniority.id"
                  v-model="selectedLevels"
                /><label :for="seniority.id" class="custom-control-label">
                  {{ seniority.name }}
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label :class="{ errorText: hasError(selectedWorkTypes) }"
              >I want to work</label
            >
            <div class="flex flex-wrap">
              <div
                v-for="workType in workTypes"
                :key="workType"
                class="mr-3 custom-control custom-checkbox"
              >
                <input
                  type="checkbox"
                  :value="workType"
                  class="custom-control-input"
                  :id="workType + 'Work'"
                  v-model="selectedWorkTypes"
                /><label :for="workType + 'Work'" class="custom-control-label">
                  {{ workType }}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div v-else :key="pageNumber">
          <VuePhoneNumberInput
            default-country-code="US"
            ref="phone"
            @update="updatePhoneNumber"
            :preferred-countries="['US', 'AM', 'RU', 'UA', 'BY']"
            error-color="#f00"
            @phone-number-blur="getPhoneError"
            :error="phoneError"
            v-model="userInfo.phone"
          />
          <div class="form-group mt-2">
            <label for="address">Address</label>
            <div class="relative">
              <place-autocomplete-field
                v-model="userInfo.address"
                v-place-autofill.street="userInfo.street"
                v-place-autofill.city="userInfo.city"
                v-place-autofill.state="userInfo.state"
                v-place-autofill.zipcode="userInfo.zip"
                v-place-autofill.country="userInfo.country"
                class="pl-4"
                :class="{ hasError: addressError }"
                placeholder="Enter an address, zipcode, or location"
                id="address"
                api-key="AIzaSyCFGWmuYhj6cgEORPCk6TLuhGAto35Yfes"
              />
              <!-- src="../../assets/images/AppPage/location1.svg" -->
              <img
                src="../../assets/images/AppPage/location1.svg"
                class="inline-block absolute left-1 top-1/2"
                style="height: 75%;transform: translateY(-50%)"
              />
            </div>
          </div>
          <div class="form-group mt-2">
            <label>Social Media</label>
            <Social
              v-for="social in getSocials"
              :key="social.label"
              :label="social.label"
              :placeholder="social.placeholder"
              :img="social.img"
              v-model.lazy="socials[social.model]"
              :error="$v.socials[social.model].$anyError"
            />
          </div>
        </div>
      </transition>
    </div>
    <div class="form-group flex mb-0 text-center">
      <button
        v-if="pageNumber !== 1"
        class="btn btn-primary btn-block"
        style="margin: 0.5rem 0.5rem 0;"
        :disabled="loading"
        @click="prevPage"
      >
        Previous
      </button>
      <!-- v-show="pageNumber  1" -->
      <button
        v-if="pageNumber !== 3"
        class="btn btn-primary btn-block"
        style="margin: 0.5rem 0.5rem 0;"
        :disabled="loading"
        @click="nextPage"
      >
        Next
      </button>
      <button
        v-else
        class="btn btn-primary btn-block"
        style="margin: 0.5rem 0.5rem 0; background-color: #841F3B !important;"
        :disabled="loading"
        @click="submit"
      >
        Submit
      </button>
    </div>

    <!-- Footer-->
    <footer class="footer footer-alt">
      <p class="text-muted">
        Already have account?
        <NuxtLink :to="localePath('/auth/login')" class="text-primary font-weight-medium ml-1"
          >Sign In</NuxtLink>
      </p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
input.hasError,
select.hasError,
::v-deep .hasError input {
  border-color: red !important;
}
.errorText {
  color: red !important;
}
.input-group-text {
  padding: 0.4em 0.75em;
  cursor: pointer;
  line-height: 0.5;
}
</style>
