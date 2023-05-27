<script>
import { mapGetters, mapActions } from 'vuex'
import Swal from 'sweetalert2'
import Avatar from '~/components/chat/Avatar.vue'
import { VueAutosuggest } from 'vue-autosuggest'
import social from '~/helpers/socialConfig'

/**
 * Contacts profile component
 */
export default {
  head() {
    return {
      title: `${this.title} | Estimators - Nuxtjs Responsive Admin Dashboard Template`
    }
  },
  components: { Avatar, VueAutosuggest },
  data() {
    return {
      title: 'Profile',
      loadingImg: false,
      skillSearchText: '',
      sectionConfigs: {
        default: {
          limit: 10,
          ulClass: { 'data-darren': true },
          liClass: { 'elf-row': true }
        }
      },
      setEdit: false,
      addSkill: false,
      fixedSkills: [],
      passowrdType: 'password',
      currentInfo: {
        links: [{}]
      },
      workTypes: {
        'Part time': 'PART_TIME',
        'Full time': 'FULL_TIME',
        'By project': 'PROJECT',
        'Free plane': 'FREE_TIME',
        'Not sure': 'NOT_SURE'
      },
      socials: {
        linkedIn: {
          icon: 'linkedin',
          color: 'info'
        },
        gitHub: {
          icon: 'github',
          color: 'secondary'
        },
        gitLab: {
          icon: 'gitlab',
          color: 'warning'
        },
        behance: {
          icon: 'behance',
          color: 'dark'
        },
        dribble: {
          icon: 'dribbble',
          color: 'pink'
        },
        facebook: {
          icon: 'facebook',
          color: 'purple'
        },
        twitter: {
          icon: 'twitter',
          color: 'info'
        }
      },
      selectedLevels: '',
      workTimeSelected: [],
      items: [
        // {
        //   text: 'Estimators',
        //   href: '/'
        // },
        // {
        //   text: 'Apps',
        //   href: '/'
        // },
        {
          text: 'Profile',
          active: true
        }
      ]
    }
  },
  created() {
    this.getSenioritys()
  },
  watch: {
    getUser(val) {
      this.currentInfo = { newPass: '', ...JSON.parse(JSON.stringify(val)) }
      this.workTimeSelected = this.currentInfo.workTimeType?.map(
        type => type.workTimeType
      )
      this.selectedLevels = this.currentInfo.seniority?.id
    }
  },
  computed: {
    ...mapGetters('api', ['getUser', 'senioritys', 'getFullName']),
    filteredOptions() {
      if (!this.skillSearchText) {
        return []
      }
      const filtered = this.fixedSkills
        .filter(
          skill =>
            skill.name
              .toLowerCase()
              .includes(this.skillSearchText.toLowerCase()) &&
            !this.allSkills.map(s => s.id).includes(skill.id)
        )
        .sort()
      return Object.freeze(filtered)
    },
    hasCompany() {
      return ['TEAM', 'COMPANY'].includes(this.user.profileType)
    },
    user() {
      return this.getUser ?? {}
    },
    allSkills() {
      let all = []
      if (this.currentInfo.professions) {
        all = [...this.currentInfo.professions]
      }
      if (this.currentInfo.skills) {
        all = [...all, ...this.currentInfo.skills]
      }
      all.sort((a, b) => (a.date?.getTime() ?? 0) < (b.date?.getTime() ?? 0))
      return all
    },
    links() {
      return Object.fromEntries(
        Object.entries(this.user.links?.[0]).filter(
          link => link[0] !== 'id' && link[1]
        )
      )
    }
  },
  methods: {
    ...mapActions('api', [
      'getSenioritys',
      'register',
      'changeUserPhoto',
      'getProfessions'
    ]),
    selectSkill(elem) {
      console.log(elem)
      if (!elem?.item) return
      this.currentInfo.professions.push({ ...elem.item, date: new Date() })
      this.skillSearchText = ''
    },
    selectAdditionalSkill() {
      console.log('stex')
      if (!this.skillSearchText) return
      // console.log(this.skillSearchText)
      const has = this.fixedSkills.find(
        skill => skill.name.toLowerCase() === this.skillSearchText.toLowerCase()
      )
      if (has) this.selectSkill({ item: has })
      else if (
        !this.currentInfo.skills
          .map(skill => skill.name.toLowerCase())
          .includes(this.skillSearchText.toLowerCase())
      ) {
        this.currentInfo.skills.push({
          name: this.skillSearchText,
          date: new Date()
        })
        this.skillSearchText = ''
      }
    },
    removeSkill(skill) {
      if (this.currentInfo.professions?.includes(skill)) {
        this.currentInfo.professions = this.currentInfo.professions.filter(
          pro => pro !== skill
        )
        return
      }
      if (this.currentInfo.skills?.includes(skill)) {
        this.currentInfo.skills = this.currentInfo.skills.filter(
          pro => pro !== skill
        )
        return
      }
    },
    getSuggestionValue(item) {
      return item.item.name
    },
    enableEdit() {
      this.setEdit = true
      this.addSkill = true
      const profs = ['DESIGNER', 'FRONT', 'BACK', 'PROJECT_MANAGER', 'QA']
      console.log(this.$refs)
      Promise.all(profs.map(pro => this.getProfessions(pro))).then(
        reses => (this.fixedSkills = reses.flat())
      )
    },
    addPhoto() {
      console.log(this.$refs.file)
      this.$refs.file.click()
    },
    onFileChange(e) {
      const file = e.target.files[0]
      if (!['image/jpg', 'image/jpeg', 'image/png'].includes(file.type)) {
        Swal.fire({
          title: 'Error',
          text: 'Invalid image.',
          icon: 'error',
          type: 'error',
          confirmButtonClass: 'btn btn-confirm mt-2'
        })
      } else if (file.size > 2097152) {
        Swal.fire({
          title: 'Error',
          text: 'File size is too large.',
          icon: 'error',
          type: 'error',
          confirmButtonClass: 'btn btn-confirm mt-2'
        })
      } else {
        // valid
        this.loadingImg = true
        this.changeUserPhoto(file)
          .then(() =>
            setTimeout(() => {
              this.loadingImg = false
            }, 500)
          )
          .catch(() => {
            Swal.fire({
              title: 'Error',
              text: 'Something went wrong.',
              icon: 'error',
              showConfirmButton: false,
              timer: 2000,
              type: 'error'
            })
          })
      }
    },
    getColor(color) {
      return `border-${color} text-${color}`
    },
    update() {
      // console.log(this.currentInfo)
      // if(['TEAM'].includes(this.getUser.profileType))
    }
  }
}
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-4 col-xl-4">
        <div class="card">
          <div class="card-body text-center">
            <div class="flex justify-center">
              <div
                class="relative photoWrapper rounded-full overflow-hidden"
                :class="{ loading: loadingImg }"
              >
                <Avatar :user="getUser" size="100" fontSize="70px" />
                <div
                  class="absolute bottom-0 right-0 left-0 photoEditDiv"
                  @click.self="addPhoto"
                >
                  +
                  <input
                    class="hidden"
                    ref="file"
                    type="file"
                    style="display: none"
                    id="files"
                    @change="onFileChange"
                    accept="image/png, image/jpg, image/jpeg"
                  />
                </div>
                <div
                  v-if="loadingImg"
                  class="absolute top-0 bottom-0 right-0 left-0 loader flex items-center justify-center"
                >
                  <div class="innerLoad" />
                </div>
              </div>
            </div>

            <h4 class="mt-3 mb-0">{{ getFullName }}</h4>
            <!-- <p class="text-muted">@webdesigner</p> -->

            <!-- <button
              type="button"
              class="btn btn-success btn-xs waves-effect mb-2 waves-light"
            >
              Follow
            </button>
            <button
              type="button"
              class="btn btn-danger btn-xs waves-effect mb-2 waves-light"
            >
              Message
            </button> -->

            <div class="text-left mt-3">
              <!-- <h4 class="font-13 text-uppercase">About Me :</h4>
              <p class="text-muted font-13 mb-3">
                Hi I'm Johnathn Deo,has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type.
              </p> -->

              <div class="table-responsive">
                <table class="table table-borderless table-sm">
                  <tbody>
                    <tr>
                      <th scope="row">Full Name :</th>
                      <td class="text-muted">
                        {{ getFullName }}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Mobile :</th>
                      <td class="text-muted">{{ user.phoneNumber }}</td>
                    </tr>
                    <tr>
                      <th scope="row">Email :</th>
                      <td class="text-muted">{{ user.email }}</td>
                    </tr>
                    <tr>
                      <th scope="row">Location :</th>
                      <td class="text-muted">USA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <ul v-if="user.links" class="social-list list-inline mt-3 mb-0">
              <li
                v-for="(link, key) in links"
                :key="key"
                class="list-inline-item"
              >
                <a
                  :href="link"
                  class="social-list-item"
                  style="line-height: 2rem !important"
                  :class="getColor(socials[key].color)"
                  target="_blank"
                >
                  <i class="fab" :class="'fa-' + socials[key].icon" />
                </a>
              </li>
              <!-- text-purple
                   text-danger
                   text-info
                   text-secondary -->
            </ul>
          </div>
          <!-- end card-box -->
        </div>
        <template v-if="user.professions && user.professions.length">
          <div class="card">
            <div class="card-body">
              <div class="flex justify-between">
                <h4 class="header-title">Skills</h4>
                <h5
                  v-if="!setEdit"
                  class="header-title skillEdit"
                  @click="enableEdit"
                >
                  Edit
                </h5>
                <!-- <h5
                  v-else
                  class="header-title skillEdit"
                  @click="addSkill = true"
                >
                  Add
                </h5> -->
              </div>
              <!-- <p class="sub-header mb-3">
              Everyone realizes why a new common language would be desirable
            </p> -->
              <div v-show="addSkill">
                <div class="form-group relative">
                  <vue-autosuggest
                    v-model="skillSearchText"
                    ref="autocomplete"
                    :suggestions="[{ data: filteredOptions }]"
                    :section-configs="sectionConfigs"
                    :getSuggestionValue="getSuggestionValue"
                    @keydown.enter="selectAdditionalSkill"
                    :input-props="{
                      id: 'autosuggest__input',
                      placeholder: 'Enter your skill'
                    }"
                    @selected="selectSkill"
                  >
                    <template slot-scope="{ suggestion }">
                      <div>{{ suggestion.item.name }}</div>
                    </template>
                  </vue-autosuggest>
                  <span
                    class="absolute ri-send-plane-fill right-0 top-1/2 cursor-pointer"
                    style="transform: translate(-50%, -50%) rotate(45deg);"
                    @click="selectAdditionalSkill"
                  />
                </div>
              </div>
              <div
                v-for="(skill, index) in allSkills"
                :key="skill + index"
                class="pt-1"
                :class="{ 'mt-2': index !== 0 }"
              >
                <h6 class="text-uppercase mt-0">
                  {{ skill.name }}
                  <span
                    v-show="setEdit"
                    class="float-right cursor-pointer select-none"
                    @click="removeSkill(skill)"
                    >&times;</span
                  >
                </h6>
                <b-progress height="5px" value="100" variant="" />
              </div>
            </div>
            <!-- end card-box-->
          </div>
        </template>
      </div>
      <!-- end col-->

      <div class="col-lg-8 col-xl-8">
        <div class="card">
          <div class="card-body">
            <b-tabs content-class="mt-1" pills class="navtab-bg">
              <!-- <b-tab active>
                <template v-slot:title>
                  <i class="mdi mdi-face-profile mr-1"></i>About Me
                </template>
                <div>
                  <h5 class="mb-4 text-uppercase">
                    Experience
                  </h5>

                  <ul class="list-unstyled timeline-sm">
                    <li class="timeline-sm-item">
                      <span class="timeline-sm-date">2015 - 18</span>
                      <h5 class="mt-0 mb-1">Lead designer / Developer</h5>
                      <p>websitename.com</p>
                      <p class="text-muted mt-2">
                        Everyone realizes why a new common language would be
                        desirable: one could refuse to pay expensive
                        translators. To achieve this, it would be necessary to
                        have uniform grammar, pronunciation and more common
                        words.
                      </p>
                    </li>
                    <li class="timeline-sm-item">
                      <span class="timeline-sm-date">2012 - 15</span>
                      <h5 class="mt-0 mb-1">Senior Graphic Designer</h5>
                      <p>Software Inc.</p>
                      <p class="text-muted mt-2">
                        If several languages coalesce, the grammar of the
                        resulting language is more simple and regular than that
                        of the individual languages. The new common language
                        will be more simple and regular than the existing
                        European languages.
                      </p>
                    </li>
                    <li class="timeline-sm-item">
                      <span class="timeline-sm-date">2010 - 12</span>
                      <h5 class="mt-0 mb-1">Graphic Designer</h5>
                      <p>themesbrand LLP</p>
                      <p class="text-muted mt-2 mb-0">
                        The European languages are members of the same family.
                        Their separate existence is a myth. For science music
                        sport etc, Europe uses the same vocabulary. The
                        languages only differ in their grammar their
                        pronunciation.
                      </p>
                    </li>
                  </ul>

                  <h5 class="mb-3 mt-5 text-uppercase">
                    Projects
                  </h5>
                  <div class="table-responsive mb-0">
                    <table class="table table-borderless mb-0">
                      <thead class="thead-light">
                        <tr>
                          <th>#</th>
                          <th>Project Name</th>
                          <th>Start Date</th>
                          <th>Due Date</th>
                          <th>Status</th>
                          <th>Clients</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>App design and development</td>
                          <td>01/01/2015</td>
                          <td>10/15/2018</td>
                          <td>
                            <span class="badge badge-info"
                              >Work in Progress</span
                            >
                          </td>
                          <td>Halette Boivin</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Coffee detail page - Main Page</td>
                          <td>21/07/2016</td>
                          <td>12/05/2018</td>
                          <td>
                            <span class="badge badge-success">Pending</span>
                          </td>
                          <td>Durandana Jolicoeur</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Poster illustation design</td>
                          <td>18/03/2018</td>
                          <td>28/09/2018</td>
                          <td>
                            <span class="badge badge-pink">Done</span>
                          </td>
                          <td>Lucas Sabourin</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Drinking bottle graphics</td>
                          <td>02/10/2017</td>
                          <td>07/05/2018</td>
                          <td>
                            <span class="badge badge-purple"
                              >Work in Progress</span
                            >
                          </td>
                          <td>Donatien Brunelle</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Landing page design - Home</td>
                          <td>17/01/2017</td>
                          <td>25/05/2021</td>
                          <td>
                            <span class="badge badge-warning">Coming soon</span>
                          </td>
                          <td>Karel Auberjo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </b-tab> -->
              <b-tab active>
                <template v-slot:title>
                  <i class="mdi mdi-settings-outline mr-1"></i>Settings
                </template>
                <form @submit.prevent="update">
                  <h5 class="mb-3 text-uppercase bg-light p-2">
                    <i class="mdi mdi-account-circle mr-1"></i> Personal Info
                  </h5>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="firstname">First Name</label>
                        <input
                          id="firstname"
                          type="text"
                          class="form-control"
                          placeholder="Enter first name"
                          v-model="currentInfo.firstName"
                          minlength="4"
                          required
                          maxlength="30"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="lastname">Last Name</label>
                        <input
                          id="lastname"
                          type="text"
                          class="form-control"
                          placeholder="Enter last name"
                          v-model="currentInfo.lastName"
                          minlength="4"
                          required
                          maxlength="30"
                        />
                      </div>
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->

                  <!-- <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <label for="userbio">Bio</label>
                        <textarea
                          id="userbio"
                          class="form-control"
                          rows="4"
                          placeholder="Write something..."
                        ></textarea>
                      </div>
                    </div>
                  </div> -->
                  <!-- end row -->

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="useremail">Email Address</label>
                        <input
                          id="useremail"
                          type="email"
                          class="form-control"
                          placeholder="Enter email"
                          v-model="currentInfo.email"
                        />
                        <!-- <span class="form-text text-muted">
                          <small>
                            If you want to change email please
                            <a href="javascript: void(0);">click</a> here.
                          </small>
                        </span> -->
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="userpassword">New Password</label>
                        <div class="input-group input-group-merge">
                          <input
                            id="userpassword"
                            :type="passowrdType"
                            class="form-control"
                            placeholder="Enter password"
                            v-model="currentInfo.newPass"
                            minlength="4"
                            maxlength="30"
                          />
                          <div
                            class="input-group-append"
                            data-password="false"
                            @mousedown.left="passowrdType = 'text'"
                            @mouseup.left="passowrdType = 'password'"
                          >
                            <div class="input-group-text">
                              <span class="password-eye" />
                            </div>
                          </div>
                        </div>
                        <!-- <span class="form-text text-muted">
                          <small>
                            If you want to change password please
                            <a href="javascript: void(0);">click</a> here.
                          </small>
                        </span> -->
                      </div>
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->
                  <template v-if="user.seniority && user.workTimeType.length">
                    <h5 class="mb-3 text-uppercase bg-light p-2">
                      <i class="mdi mdi-notebook mr-1"></i> Work
                    </h5>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="companyname">Seniority Level</label>
                          <div class="flex flex-wrap">
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
                              /><label
                                :for="seniority.id"
                                class="custom-control-label"
                              >
                                {{ seniority.name }}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="cwebsite">Work Type</label>
                          <div class="flex flex-wrap">
                            <div
                              v-for="(key, workType) in workTypes"
                              :key="workType"
                              class="mr-3 custom-control custom-checkbox"
                            >
                              <input
                                type="checkbox"
                                :value="key"
                                class="custom-control-input"
                                :id="workType + 'Work'"
                                v-model="workTimeSelected"
                              /><label
                                :for="workType + 'Work'"
                                class="custom-control-label"
                              >
                                {{ workType }}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                  </template>

                  <template v-if="hasCompany">
                    <h5 class="mb-3 text-uppercase bg-light p-2">
                      <i class="mdi mdi-office-building mr-1"></i>
                      {{ user.profileType }} Info
                    </h5>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="companyname">Name</label>
                          <input
                            v-model="currentInfo.teamName"
                            id="companyname"
                            type="text"
                            class="form-control"
                            :placeholder="
                              `Enter ${user.profileType.toLowerCase()} name`
                            "
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="cwebsite">Website</label>
                          <input
                            id="cwebsite"
                            type="text"
                            class="form-control"
                            placeholder="Enter website url"
                          />
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                  </template>
                  <!-- end row -->
                  <template v-if="currentInfo.links">
                    <h5 class="mb-3 text-uppercase bg-light p-2">
                      <i class="mdi mdi-earth mr-1"></i> Social
                    </h5>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="social-fb">Facebook</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span
                                :class="getColor(socials.facebook.color)"
                                class="input-group-text"
                              >
                                <i class="fab fa-facebook-square"></i>
                              </span>
                            </div>
                            <input
                              :class="getColor(socials.facebook.color)"
                              style="color: black !important"
                              id="social-fb"
                              type="text"
                              class="form-control"
                              placeholder="Url"
                              v-model="currentInfo.links[0].facebook"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="social-tw">Twitter</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span
                                :class="getColor(socials.twitter.color)"
                                class="input-group-text"
                              >
                                <i class="fab fa-twitter"></i>
                              </span>
                            </div>
                            <input
                              :class="getColor(socials.twitter.color)"
                              style="color: black !important"
                              id="social-tw"
                              type="text"
                              class="form-control"
                              placeholder="Url"
                              v-model="currentInfo.links[0].twitter"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row -->

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="social-lin">Linkedin</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span
                                :class="getColor(socials.linkedIn.color)"
                                class="input-group-text"
                              >
                                <i class="fab fa-linkedin"></i>
                              </span>
                            </div>
                            <input
                              :class="getColor(socials.linkedIn.color)"
                              style="color: black !important"
                              id="social-lin"
                              type="text"
                              class="form-control"
                              placeholder="Url"
                              v-model="currentInfo.links[0].linkedIn"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="social-dribbble">Dribbble</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span
                                :class="getColor(socials.dribble.color)"
                                class="input-group-text"
                              >
                                <i class="fab fa-dribbble"></i>
                              </span>
                            </div>
                            <input
                              :class="getColor(socials.dribble.color)"
                              style="color: black !important"
                              id="social-dribbble"
                              type="text"
                              class="form-control"
                              placeholder="Url"
                              v-model="currentInfo.links[0].dribble"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row -->

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="social-gitLab">Gitlab</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span
                                :class="getColor(socials.gitLab.color)"
                                class="input-group-text"
                              >
                                <i class="fab fa-gitlab"></i>
                              </span>
                            </div>
                            <input
                              :class="getColor(socials.gitLab.color)"
                              style="color: black !important"
                              id="social-gitLab"
                              type="text"
                              class="form-control"
                              placeholder="Url"
                              v-model="currentInfo.links[0].gitLab"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="social-gh">Github</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span
                                :class="getColor(socials.gitHub.color)"
                                class="input-group-text"
                              >
                                <i class="fab fa-github"></i>
                              </span>
                            </div>
                            <input
                              :class="getColor(socials.gitHub.color)"
                              style="color: black !important"
                              id="social-gh"
                              type="text"
                              class="form-control"
                              placeholder="Url"
                              v-model="currentInfo.links[0].gitHub"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row -->

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="social-behance">Behance</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span
                                :class="getColor(socials.behance.color)"
                                class="input-group-text"
                              >
                                <i class="fab fa-behance"></i>
                              </span>
                            </div>
                            <input
                              :class="getColor(socials.behance.color)"
                              style="color: black !important"
                              id="social-behance"
                              type="text"
                              class="form-control"
                              placeholder="Url"
                              v-model="currentInfo.links[0].behance"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end row -->
                  </template>
                  <div class="text-right">
                    <button type="submit" class="btn btn-success mt-2">
                      <i class="mdi mdi-content-save"></i> Save
                    </button>
                  </div>
                </form>
              </b-tab>
            </b-tabs>
          </div>
          <!-- end card-box-->
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row-->
  </div>
</template>

<style lang="scss" scoped>
::v-deep .input-group-text {
  padding: 6.4px 12px !important;
}
.input-group .input-group-prepend::after {
  border-right: none !important;
}

.photoWrapper {
  &:not(.loading):hover .photoEditDiv {
    transform: translateY(0);
  }
  .loader {
    background-color: rgba($color: #000000, $alpha: 0.7);
    .innerLoad {
      margin: 0 auto;
      border: 4px solid #f3f3f3;
      border-radius: 50%;
      border-top: 4px solid #3498db;
      width: 40px;
      height: 40px;
      -webkit-animation: spin 2s linear infinite;
      animation: spin 2s linear infinite;
    }
  }
  .photoEditDiv {
    transform: translateY(100%);
    transition: all 0.2s;
    cursor: pointer;
    font-size: 22px;
    color: white;
    background-color: rgba($color: #000000, $alpha: 0.7);
    &:hover {
      text-shadow: 0 0 5px white;
    }
  }
}
.skillEdit {
  font-size: 14px !important;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: #3498db;
  }
}
::v-deep #autosuggest {
  position: relative;
  border: 1px solid gray;
  padding: 5px 25px 5px 10px;
  border-radius: 5px;
  &,
  > div,
  > div:first-child input {
    width: 100%;
    outline: none;
  }
  .autosuggest__results-container .autosuggest__results {
    ul {
      margin: 0 !important;
      li {
        padding: 5px;
        &:hover,
        &:focus {
          background-color: rgba($color: #841f3b, $alpha: 0.2);
          cursor: pointer;
        }
      }
    }
    z-index: 100;
    border-radius: 5px;
    background-color: white;
    width: 100%;
    position: absolute;
    left: 0;
    border: 1px solid #3498db;
    bottom: -1px;
    transform: translateY(100%);
  }
}
</style>
