<script>
import { mapActions, mapGetters } from 'vuex'
/**
 * Topbar component
 */
export default {
  data() {
    return {
      languages: [
        {
          flag: require('~/assets/images/flags/us.jpg'),
          language: 'en',
          title: 'English'
        },
        {
          flag: require('~/assets/images/flags/french.jpg'),
          language: 'fr',
          title: 'French'
        },
        {
          flag: require('~/assets/images/flags/spain.jpg'),
          language: 'es',
          title: 'Spanish'
        },
        {
          flag: require('~/assets/images/flags/china.png'),
          language: 'zh',
          title: 'Chinese'
        },
        {
          flag: require('~/assets/images/flags/arabic.png'),
          language: 'ar',
          title: 'Arabic'
        }
      ],
      current_language: this.$i18n.locale,
      text: null,
      flag: null,
      value: null
    }
  },
  mounted() {
    this.value = this.languages.find(x => x.language === this.$i18n.locale)
    this.text = this.value.title
    this.flag = this.value.flag
  },
  computed: {
    ...mapGetters('api', ['getFullName', 'getUser'])
  },
  methods: {
    ...mapActions('api', ['logout']),
    /**
     * Toggle menu
     */
    toggleMenu() {
      this.$parent.toggleMenu()
    },
    logoutUser() {
      this.logout().then(() => {
        this.$router.push('/auth/login')
      })
    },
    /**
     * Full screen
     */
    initFullScreen() {
      document.body.classList.toggle('fullscreen-enable')
      if (
        !document.fullscreenElement &&
        /* alternative standard method */
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen()
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen()
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          )
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        }
      }
    },
    /**
     * Toggle rightbar
     */
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar()
    },
    /**
     * Set languages
     */
    setLanguage(locale, country, flag) {
      this.$i18n.locale = locale
      this.current_language = locale
      this.text = country
      this.flag = flag
    },
    /**
     * Horizontal-toggle menu
     */
    horizonalmenu() {
      let element = document.getElementById('topnav-menu-content')
      element.classList.toggle('show')
    }
    /**
     * Logout user
     */
  }
}
</script>

<template>
  <!-- Topbar Start -->
  <div
    class="navbar-custom"
    style="background-color: #841F3B !important; box-shadow: none;"
  >
    <div class="container-fluid">
      <ul class="list-unstyled topnav-menu float-right mb-0">

        <li class="dropdown d-none d-lg-inline-block">
          <a
            class="nav-link dropdown-toggle arrow-none waves-effect waves-light"
            @click="initFullScreen"
            data-toggle="fullscreen"
            href="#"
          >
            <i class="fe-maximize noti-icon"></i>
          </a>
        </li>

        <b-nav-item-dropdown
          right
          class="notification-list topbar-dropdown"
          menu-class="profile-dropdown"
          toggle-class="p-0"
        >
          <template slot="button-content" class="nav-link dropdown-toggle">
            <div class="nav-user mr-0">
              <img
                v-if="!getUser || !getUser.photo"
                src="~/assets/images/users/usericon.svg"
                class="rounded-full"
              />
              <img
                v-else
                :src="getUser.photo"
                class="rounded-full object-cover h-full"
              />
              <span class="pro-user-name ml-1">
                {{ getFullName }}
                <i class="mdi mdi-chevron-down"></i>
              </span>
            </div>
          </template>

          <b-dropdown-header>
            <h6 class="text-overflow m-0 py-2">
              {{ $t('navbar.dropdown.name.list.greet') }}
            </h6>
          </b-dropdown-header>

          <b-dropdown-item to="/contacts/profile">
            <i class="remixicon-account-circle-line"></i>
            <span>{{ $t('navbar.dropdown.name.list.account') }}</span>
          </b-dropdown-item>

          <b-dropdown-divider></b-dropdown-divider>
          <a class="dropdown-item cursor-pointer" @click="logoutUser">
            <i class="fe-log-out mr-1"></i>
            <span>{{ $t('navbar.dropdown.name.list.logout') }}</span>
          </a>
        </b-nav-item-dropdown>
      </ul>

      <!-- LOGO -->
      <div class="logo-box">
        <nuxt-link :to="localePath('/')" class="logo logo-dark text-center">
          <span class="logo-sm">
            <img src="~/assets/images/logo.png" alt height="24" />
          </span>
          <span class="logo-lg">
            <img src="~/assets/images/logo.png" alt height="20" />
          </span>
        </nuxt-link>

        <nuxt-link :to="localePath('/')" class="logo logo-light text-center">
          <span class="logo-sm">
            <img src="~/assets/images/logo.png" alt height="24" />
          </span>
          <span class="logo-lg">
            <img src="~/assets/images/logo.png" alt height="20" />
          </span>
        </nuxt-link>
      </div>

      <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
        <li>
          <button
            class="button-menu-mobile waves-effect waves-light"
            @click="toggleMenu"
          >
            <i class="fe-menu"></i>
          </button>
        </li>

        <li>
          <!-- Mobile menu toggle (Horizontal Layout)-->
          <a
            class="navbar-toggle nav-link"
            data-toggle="collapse"
            @click="horizonalmenu()"
            data-target="#topnav-menu-content"
          >
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          <!-- End mobile menu toggle-->
        </li>
      </ul>
      <div class="clearfix"></div>
    </div>
  </div>
  <!-- end Topbar -->
</template>
