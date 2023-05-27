<script>
import { chatData, chatMessagesData } from './data'
import { required } from 'vuelidate/lib/validators'
import EmojiPicker from 'vue-emoji-picker'
import { mapActions, mapGetters } from 'vuex'
import mapper from '~/helpers/mapper'
import Avatar from '~/components/chat/Avatar.vue'

/**
 * Chat comoponent
 */
export default {
  head() {
    return {
      title: `${this.title} | Estimators - Nuxtjs Responsive Admin Dashboard Template`
    }
  },
  components: {
    EmojiPicker,
    Avatar
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  },
  async fetch() {
    this.chatData = (await this.$store.dispatch('api/getAllUsers')).filter(
      user => user.id !== this.getUser.id
    )
  },
  data() {
    return {
      chatData: null,
      search: '',
      chatMessagesData: chatMessagesData,
      title: 'Chat',
      items: [
        // {
        //   text: 'Estimators'
        // },
        // {
        //   text: 'Apps'
        // },
        {
          text: 'Chat',
          active: true
        }
      ],
      submitted: false,
      form: {
        message: ''
      },
      username: 'Designer',
      selectedTab: 0
    }
  },
  watch: {
    selectedTab(e) {
      console.log(e)
    }
  },
  computed: {
    ...mapGetters('api', ['getUser', 'getFullName', 'getFirstLetters']),

    getProfession() {
      console.log(Object.entries(mapper))
      const prof = Object.entries(mapper).find(
        el => el[1] === this.getUser?.profileType
      )?.[0]
      if (!prof) {
        return '&nbsp;'
      }
      return prof[0].toUpperCase() + prof.substr(1)
    }
  },
  validations: {
    form: {
      message: {
        required
      }
    }
  },
  methods: {
    userFullName(item) {
      return (item.firstName || '&nbsp;') + ' ' + (item.lastName || '&nbsp;')
    },
    getFirstLettersForChats(item) {
      return (
        (item?.firstName?.[0]?.toUpperCase() ?? '') +
        (item?.lastName?.[0]?.toUpperCase() ?? '')
      )
    },
    clickEventMy() {
      setTimeout(() => {
        this.$set(this.$refs.emoji.display, 'visible', true)
      }, 0)
    },
    append(emoji) {
      this.$set(this.form, 'message', (this.form.message ?? '') + emoji)
    },
    chatUsername(name, image) {
      this.username = name
      this.usermessage = 'Hello'

      this.chatMessagesData = []
      const currentDate = new Date()
      this.chatMessagesData.push({
        image: image,
        name: this.username,
        message: this.usermessage,
        time: currentDate.getHours() + ':' + currentDate.getMinutes()
      })
    },

    /**
     * Char form Submit
     */
    // eslint-disable-next-line no-unused-vars
    formSubmit(e) {
      this.submitted = true

      // stop here if form is invalid
      this.$v.$touch()

      if (this.$v.$invalid) {
        return
      } else {
        const message = this.form.message
        const currentDate = new Date()
        this.chatMessagesData.push({
          align: 'right',
          name: 'Marcus',
          message,
          time: currentDate.getHours() + ':' + currentDate.getMinutes(),
          image: require('~/assets/images/users/usericon.svg')
        })
      }
      this.submitted = false
      this.form = {}
    }
  }
}
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <!-- start chat users-->
      <div class="col-xl-3 col-lg-4">
        <div class="card" style="border: 1px solid #016189 !important;">
          <div class="card-body">
            <div class="media mb-3">
              <nuxt-link :to="localPath('/contacts/profile')">
                <Avatar class="mr-2" :user="getUser" />
              </nuxt-link>
              <div class="media-body">
                <h5 class="mt-0 mb-0 font-15">
                  <nuxt-link :to="localPath('/contacts/profile')" class="text-reset">{{
                    getFullName
                  }}</nuxt-link>
                </h5>
                <p class="mt-1 mb-0 font-14" v-html="getProfession" />
                <p class="mb-0 text-muted font-14">
                  <small class="mdi mdi-circle text-success"></small> Online
                </p>
              </div>
              <div>
                <nuxt-link :to="localPath('/contacts/profile')" class="text-reset font-20">
                  <i class="mdi mdi-cog-outline"></i>
                </nuxt-link>
              </div>
            </div>

            <!-- start search box -->
            <form class="search-bar mb-3">
              <div class="position-relative">
                <input
                  style="border: 1px solid #016189 !important;"
                  type="text"
                  class="form-control form-control-light"
                  :placeholder="
                    selectedTab ? 'Search Project' : 'Search People'
                  "
                />
                <span class="mdi mdi-magnify"></span>
              </div>
            </form>
            <!-- end search box -->
            <b-tabs v-model="selectedTab">
              <b-tab active title="Contacts">
                <!-- users -->
                <div class="row">
                  <div class="col">
                    <simplebar
                      data-simplebar
                      style="max-height: 498px; padding-right: 8px"
                    >
                      <template v-if="chatData">
                        <div
                          href="javascript:void(0);"
                          class="text-body cursor-pointer"
                          v-for="(item, index) in chatData"
                          :key="index"
                        >
                          <div class="media my-2 ml-2 mr-1">
                            <div class="position-relative">
                              <span
                                class="user-status"
                                :class="{
                                  online: index % 3 === 0,
                                  busy: index % 3 === 1,
                                  'do-not-disturb': index % 3 === 2
                                }"
                              ></span>
                              <!-- <div
                                style="width: 81px; height: 81px"
                                class="mr-2"
                              >
                                <img
                                  v-if="item.photo"
                                  :src="item.photo"
                                  class=" rounded-circle w-full h-full"
                                  alt="Brandon Smith"
                                />
                                <div
                                  v-else
                                  class="rounded-full border-2 h-full w-full overflow-hidden firstLettersImg"
                                  :style="{
                                    'border-color': 'red !important',
                                    color: 'red'
                                  }"
                                >
                                  {{ getFirstLettersForChats(item) }}
                                </div>
                              </div> -->
                              <Avatar class="mr-2" :user="item" />
                              <!-- <img
                                :src="item.image"
                                class="mr-2 rounded-circle"
                                height="42"
                                style="max-height: 75px"
                                alt="user"
                              /> -->
                            </div>
                            <div class="media-body">
                              <h5 class="mt-0 mb-0 font-14">
                                <span
                                  class="float-right text-muted font-weight-normal font-12"
                                  >12:00</span
                                >
                                <span v-html="userFullName(item)" />
                              </h5>
                              <p class="mt-1 mb-0 text-muted font-14">
                                <span
                                  class="w-75 h-16 block overflow-hidden overflow-ellipsis"
                                  >Lax libero debitis minima ut?</span
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                      </template>
                    </simplebar>
                    <!-- end slimscroll-->
                  </div>
                  <!-- End col -->
                </div>
                <!-- end users -->
              </b-tab>
              <b-tab title="Projects">
                <!-- users -->
                <simplebar
                  data-simplebar
                  style="max-height: 498px; padding-right: 8px;"
                >
                  <div
                    v-for="i in ['collapse-1', 'collapse-2', 'collapse-3']"
                    :key="i"
                    class="mb-2"
                  >
                    <b-button v-b-toggle="i" variant="primary" class="w-full"
                      >{{ i }} Low.Low</b-button
                    >
                    <b-collapse :id="i" class="mt-2">
                      <!-- users -->
                      <div class="row" style="margin: 0">
                        <div class="col" style="padding-left: 0">
                          <template v-if="chatData">
                            <div
                              href="javascript:void(0);"
                              class="text-body cursor-pointer"
                              v-for="(item, index) in chatData"
                              :key="index"
                            >
                              <div class="media my-2 ml-2 mr-1">
                                <div class="position-relative">
                                  <span
                                    class="user-status"
                                    :class="{
                                      online: index % 3 === 0,
                                      busy: index % 3 === 1,
                                      'do-not-disturb': index % 3 === 2
                                    }"
                                  ></span>
                                  <!-- <div
                                    style="width: 81px; height: 81px"
                                    class="mr-2"
                                  >
                                    <img
                                      v-if="item.photo"
                                      :src="item.photo"
                                      class=" rounded-circle w-full h-full"
                                      alt="Brandon Smith"
                                    />
                                    <div
                                      v-else
                                      class="rounded-full border-2 h-full w-full overflow-hidden firstLettersImg"
                                      :style="{
                                        'border-color': 'red !important',
                                        color: 'red'
                                      }"
                                    >
                                      {{ getFirstLettersForChats(item) }}
                                    </div>
                                  </div> -->
                                  <Avatar class="mr-2" :user="item" />
                                  <!-- <img
                                :src="item.image"
                                class="mr-2 rounded-circle"
                                height="42"
                                style="max-height: 75px"
                                alt="user"
                              /> -->
                                </div>
                                <div class="media-body">
                                  <h5 class="mt-0 mb-0 font-14">
                                    <span
                                      class="float-right text-muted font-weight-normal font-12"
                                      >12:00</span
                                    >
                                    <span v-html="userFullName(item)" />
                                  </h5>
                                  <p class="mt-1 mb-0 text-muted font-14">
                                    <span
                                      class="w-75 h-16 block overflow-hidden overflow-ellipsis"
                                      >Lorem, ipsum dolor sit amet consectetur
                                      adipisicing elit. Beatae nisi ut magnam
                                      quam perferendis, dolorum atque ea iste
                                      perspiciatis sed temporibus eos dolore.
                                      Aperiam molestiae, ex libero debitis
                                      minima ut?</span
                                    >
                                  </p>
                                </div>
                              </div>
                            </div>
                          </template>
                          <!-- end slimscroll-->
                        </div>
                        <!-- End col -->
                      </div>
                      <!-- end users -->
                    </b-collapse>
                  </div>
                </simplebar>
                <!-- end slimscroll-->
              </b-tab>
            </b-tabs>

            <!-- <h6 class="font-13 text-muted text-uppercase mb-2">Contacts</h6> -->
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end chat users-->

      <!-- chat area -->
      <div class="col-xl-9 col-lg-8">
        <div class="card" style="border: 1px solid #016189 !important;">
          <div class="card-body py-2 px-3 border-bottom border-light">
            <div class="media py-1">
              <img
                src="~/assets/images/users/avatar-5.jpg"
                class="mr-2 rounded-circle"
                height="36"
                style="max-height: 75px"
                alt="Brandon Smith"
              />
              <div class="media-body">
                <h5 class="mt-0 mb-0 font-15">
                  <nuxt-link :to="localPath('/contacts/profile')" class="text-reset">
                    {{ username }}
                  </nuxt-link>
                </h5>
                <p class="mt-1 mb-0 font-14" v-html="getProfession" />
                <p class="mb-0 text-muted font-12">
                  <small class="mdi mdi-circle text-success"></small> Online
                </p>
              </div>
              <div>
                <a
                  href="javascript: void(0);"
                  class="text-reset font-19 py-1 px-2 d-inline-block"
                  v-b-tooltip.hover
                  title="Voice Call"
                >
                  <i class="fe-phone-call"></i>
                </a>
                <a
                  href="javascript: void(0);"
                  class="text-reset font-19 py-1 px-2 d-inline-block"
                  v-b-tooltip.hover
                  title="Video Call"
                >
                  <i class="fe-video"></i>
                </a>
                <a
                  href="javascript: void(0);"
                  class="text-reset font-19 py-1 px-2 d-inline-block"
                  v-b-tooltip.hover
                  title="Add Users"
                >
                  <i class="fe-user-plus"></i>
                </a>
                <a
                  href="javascript: void(0);"
                  class="text-reset font-19 py-1 px-2 d-inline-block"
                  v-b-tooltip.hover
                  title="Delete Chat"
                >
                  <i class="fe-trash-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="card-body">
            <simplebar data-simplebar style="max-height: 460px">
              <ul class="conversation-list chat-app-conversation">
                <li
                  class="clearfix"
                  v-for="(data, index) in chatMessagesData"
                  :key="index"
                  :class="{ odd: data.align === 'right' }"
                >
                  <div class="chat-avatar">
                    <img :src="data.image" class="rounded" alt="James Z" />
                    <i>{{ data.time }}</i>
                  </div>
                  <div class="conversation-text">
                    <div class="ctext-wrap">
                      <i>{{ data.name }}</i>
                      <p>{{ data.message }}</p>
                    </div>
                    <div
                      class="card mt-2 mb-1 shadow-none border text-left"
                      v-if="data.file === true"
                    >
                      <div class="p-2">
                        <div class="row align-items-center">
                          <div class="col-auto">
                            <div class="avatar-sm">
                              <span class="avatar-title bg-primary rounded"
                                >PDF</span
                              >
                            </div>
                          </div>
                          <div class="col pl-0">
                            <a
                              href="javascript:void(0);"
                              class="text-muted font-weight-medium"
                              >minton-presentation.pdf</a
                            >
                            <p class="mb-0">2.3 MB</p>
                          </div>
                          <div class="col-auto">
                            <!-- Button -->
                            <a
                              href="javascript:void(0);"
                              class="btn btn-link btn-lg text-muted"
                            >
                              <i class="dripicons-download"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <b-dropdown
                    class="conversation-actions dropdown-menu-left"
                    toggle-class="btn-sm btn-link text-reset p-0"
                    variant="black"
                    :left="data.align === 'right'"
                    :right="data.align !== 'right'"
                  >
                    <template v-slot:button-content>
                      <i class="mdi mdi-dots-vertical font-18"></i>
                    </template>
                    <a class="dropdown-item" href="#">Copy Message</a>
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item" href="#">Delete</a>
                  </b-dropdown>
                </li>
              </ul>
            </simplebar>
            <div class="row">
              <div class="col">
                <div class="mt-2 bg-light p-3 rounded">
                  <form
                    class="needs-validation"
                    @submit.prevent="formSubmit"
                    name="chat-form"
                    id="chat-form"
                  >
                    <div class="row bottomChat">
                      <div class="col mb-2 mb-sm-0">
                        <input
                          type="text"
                          v-model="form.message"
                          class="form-control border-0"
                          placeholder="Enter your text"
                        />
                        <div
                          v-if="submitted && $v.form.message.$error"
                          class="invalid-feedback"
                        >
                          <span v-if="!$v.form.message.required"
                            >Please enter your message</span
                          >
                        </div>
                      </div>
                      <div class="col-sm-auto">
                        <div class="btn-group flex flex-wrap-reverse w-full">
                          <a href="#" class="btn btn-light">
                            <img
                              src="../../../assets/images/AboutCompanyImg/add.svg"
                              class="h-6 w-6"
                            />
                          </a>
                          <a href="#" class="btn btn-light">
                            <img
                              src="../../../assets/images/AboutCompanyImg/notes.svg"
                              class="h-6 w-6"
                            />
                          </a>
                          <a href="#" class="btn btn-light">
                            <img
                              src="../../../assets/images/AboutCompanyImg/video-camera.svg"
                              class="h-6 w-6"
                            />
                          </a>
                          <a href="#" class="btn btn-light">
                            <img
                              src="../../../assets/images/AboutCompanyImg/paperclip.svg"
                              class="h-6 w-6"
                            />
                          </a>
                          <emoji-picker
                            class="btn btn-light p-0"
                            ref="emoji"
                            :search="search"
                            @click="clickEventMy"
                          >
                            <!-- slot-scope="{ events: { click: clickEvent } }" -->
                            <div
                              class="w-full h-full pin-t pin-r cursor-pointer emoji-invoker outline-none"
                              slot="emoji-invoker"
                              style="padding: 0.45rem 0.9rem;"
                              @click="clickEventMy"
                            >
                              <img
                                src="../../../assets/images/AboutCompanyImg/smile.svg"
                                class="h-6 w-6"
                              />
                            </div>
                            <div slot="emoji-picker" slot-scope="{ emojis }">
                              <div
                                class="absolute z-10 border w-64 h-96 overflow-auto p-1 rounded bg-white shadow t-4 -r-64"
                              >
                                <div class="flex">
                                  <input
                                    class="rounded-full border py-1 px-2 outline-none focus:shadow-outline w-full"
                                    type="text"
                                    v-model="search"
                                    v-focus
                                    placeholder="Search Emoji"
                                  />
                                </div>
                                <div>
                                  <div
                                    v-for="(emojiGroup, category) in emojis"
                                    :key="category"
                                  >
                                    <h5
                                      class="text-grey-darker uppercase text-sm cursor-default mb-2 mt-2"
                                    >
                                      {{ category }}
                                    </h5>
                                    <div
                                      class="flex flex-wrap justify-between emojis"
                                    >
                                      <div
                                        class="p-1 cursor-pointer rounded hover:bg-grey-light focus:outline-none focus:shadow-outline flex items-center justify-center h-6 w-6"
                                        v-for="(emoji, emojiName) in emojiGroup"
                                        :key="emojiName"
                                        @click="append(emoji)"
                                        :title="emojiName"
                                      >
                                        {{ emoji }}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </emoji-picker>
                          <button
                            type="submit"
                            class="btn btn-success chat-send btn-block w-auto"
                          >
                            <i class="fe-send"></i>
                          </button>
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row-->
                  </form>
                </div>
              </div>
              <!-- end col-->
            </div>
            <!-- end row -->
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end chat area-->
    </div>
    <!-- end row-->
  </div>
</template>

<style lang="scss" scoped>
.w-128 {
  width: 32rem;
}
.h-96 {
  height: 24rem;
}
.t-4 {
  bottom: 0;
}
.-r-64 {
  right: 0;
}

.emoji-invoker {
  transition: all 0.2s;
}
.emoji-invoker:hover {
  transform: scale(1.1);
}

.emojis:after {
  content: '';
  flex: auto;
}

@media screen and (max-width: 1367px) {
  .bottomChat {
    flex-direction: column;
    > .col:first-child {
      margin-bottom: 0.75rem !important;
    }
  }
}
</style>
