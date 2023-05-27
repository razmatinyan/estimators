<script>
export default {
  data() {
    return {
      activetab: 1
    }
  },
  mounted: function() {
    this._activateMenuDropdown()
    this.$router.afterEach((routeTo, routeFrom) => {
      this._activateMenuDropdown()
    })
  },
  methods: {
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems(item) {
      return item.subItems !== undefined ? item.subItems.length > 0 : false
    },

    _activateMenuDropdown() {
      const resetParent = el => {
        el.classList.remove('active')
        var parent = el.parentElement
        if (parent) {
          parent.classList.remove('menuitem-active')
          const parent2 = parent.parentElement
          if (parent2) {
            const parent3 = parent2.parentElement
            if (parent3) {
              parent3.classList.remove('show')
              const parent4 = parent3.parentElement
              if (parent4) {
                parent4.classList.remove('menuitem-active')
              }
            }
          }
        }
      }
      var links = document.getElementsByClassName('side-nav-link-ref')
      var matchingMenuItem = null
      const paths = []
      for (let i = 0; i < links.length; i++) {
        // reset menu
        resetParent(links[i])
      }
      for (var i = 0; i < links.length; i++) {
        paths.push(links[i]['pathname'])
      }
      var itemIndex = paths.indexOf(window.location.pathname)
      if (itemIndex === -1) {
        const strIndex = window.location.pathname.lastIndexOf('/')
        const item = window.location.pathname.substr(0, strIndex).toString()
        matchingMenuItem = links[paths.indexOf(item)]
      } else {
        matchingMenuItem = links[itemIndex]
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add('active')
        var parent = matchingMenuItem.parentElement

        /**
         * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
         * We should come up with non hard coded approach
         */
        if (parent) {
          parent.classList.add('menuitem-active')
          const parent2 = parent.parentElement
          if (parent2) {
            const parent3 = parent2.parentElement
            if (parent3) {
              parent3.classList.add('show')
              const parent4 = parent3.parentElement
              if (parent4) {
                parent4.classList.add('menuitem-active')
              }
            }
          }
        }
      }
    }
  }
}
</script>

<template>
  <!-- ========== Left Sidebar Start ========== -->
  <div class="left-side-menu">
    <div class="h-100">
      <div class="sidebar-content">
        <simplebar class="sidebar-icon-menu h-100" data-simplebar>
          <!-- LOGO -->
          <a href="/" class="logo">
            <span>
              <!-- <img src="~/assets/images/logo-sm.png" alt height="28" /> -->
              <img src="~/assets/images/logo.png" alt height="28" />
            </span>
          </a>
          <nav class="nav flex-column" id="two-col-sidenav-main">
            <a
              class="nav-link"
              href="javascript: void(0);"
              v-on:click="activetab = 1"
              v-bind:class="[activetab === 1 ? 'active' : '']"
              data-toggle="tooltip"
              data-placement="right"
              title="Dashboard"
              data-trigger="hover"
            >
              <i class="ri-dashboard-line"></i>
            </a>
            <a
              class="nav-link"
              href="javascript: void(0);"
              v-on:click="activetab = 2"
              v-bind:class="[activetab === 2 ? 'active' : '']"
              data-toggle="tooltip"
              data-placement="right"
              title="Apps"
              data-trigger="hover"
            >
              <i class="ri-apps-2-line"></i>
            </a>
            <a
              class="nav-link"
              v-on:click="activetab = 3"
              v-bind:class="[activetab === 3 ? 'active' : '']"
              href="javascript: void(0);"
              data-toggle="tooltip"
              data-placement="right"
              title="Pages"
              data-trigger="hover"
            >
              <i class="ri-pages-line"></i>
            </a>
            <a
              class="nav-link"
              v-on:click="activetab = 4"
              v-bind:class="[activetab === 4 ? 'active' : '']"
              href="javascript: void(0);"
              data-toggle="tooltip"
              data-placement="right"
              title="UI Elements"
              data-trigger="hover"
            >
              <i class="ri-pencil-ruler-2-line"></i>
            </a>
            <a
              class="nav-link"
              v-on:click="activetab = 5"
              v-bind:class="[activetab === 5 ? 'active' : '']"
              href="javascript: void(0);"
              data-toggle="tooltip"
              data-placement="right"
              title="Components"
              data-trigger="hover"
            >
              <i class="ri-stack-line"></i>
            </a>
            <nuxt-link class="nav-link" :to="localePath('/widgets')">
              <i class="ri-honour-line align-middle"></i
            ></nuxt-link>
          </nav>
        </simplebar>
        <!--- Sidemenu -->
        <div class="sidebar-main-menu">
          <simplebar id="two-col-menu" class="h-100" data-simplebar>
            <div
              class="twocolumn-menu-item d-block"
              id="dashboard"
              v-if="activetab === 1"
            >
              <div class="title-box">
                <h5 class="menu-title">Dashboards</h5>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/dashboard/estimates')"
                      >Estimates</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/dashboard/finance')"
                      >Finance</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/dashboard/analytics')"
                      >Analytics</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div
              class="twocolumn-menu-item d-block"
              id="apps"
              v-if="activetab === 2"
            >
              <h5 class="menu-title">Apps</h5>
              <ul class="nav flex-column">
                <li class="nav-item">
                  <nuxt-link
                    class="nav-link side-nav-link-ref"
                    :to="localePath('/apps/calendar')"
                    >Calendar</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link side-nav-link-ref" :to="localePath('/apps/chat')"
                    >Chat</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="javascript: void(0);"
                    v-b-toggle.sidebarProjects
                    data-toggle="collapse"
                    class="nav-link"
                  >
                    <span>Projects</span>
                    <span class="menu-arrow"></span>
                  </a>
                  <b-collapse id="sidebarProjects">
                    <ul class="nav-second-level">
                      <li>
                        <nuxt-link
                          :to="localePath('/projects/products-grid')"
                          class="side-nav-link-ref"
                          >Products Grid</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link
                          :to="localePath('/projects/product-detail/1')"
                          class="side-nav-link-ref"
                          >Product Detail</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link
                          :to="localePath('/projects/product-create')"
                          class="side-nav-link-ref"
                          >Create Product</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link
                          :to="localePath('/projects/customers')"
                          class="side-nav-link-ref"
                          >Customers</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link
                          :to="localePath('/projects/orders')"
                          class="side-nav-link-ref"
                          >Orders</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link
                          :to="localePath('/projects/order-detail')"
                          class="side-nav-link-ref"
                          >Order Detail</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link
                          :to="localePath('/projects/sellers')"
                          class="side-nav-link-ref"
                          >Sellers</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link :to="localePath('/projects/cart')" class="side-nav-link-ref"
                          >Shopping Cart</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link
                          :to="localePath('/projects/checkout')"
                          class="side-nav-link-ref"
                          >Checkout</nuxt-link
                        >
                      </li>
                    </ul>
                  </b-collapse>
                </li>

                <li class="nav-item">
                  <nuxt-link
                    class="nav-link side-nav-link-ref"
                    :to="localePath('/apps/partners')"
                    >Partners</nuxt-link
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="#sidebarTasks"
                    v-b-toggle.sidebarTasks
                    data-toggle="collapse"
                    class="nav-link"
                  >
                    <span>Tasks</span>
                    <span class="menu-arrow"></span>
                  </a>
                  <b-collapse id="sidebarTasks">
                    <ul class="nav-second-level">
                      <li>
                        <nuxt-link :to="localePath('/task/list')" class="side-nav-link-ref"
                          >List</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link :to="localePath('/task/detail')" class="side-nav-link-ref"
                          >Details</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link :to="localePath('/task/kanban')" class="side-nav-link-ref"
                          >Kanban Board</nuxt-link
                        >
                      </li>
                    </ul>
                  </b-collapse>
                </li>
                <li class="nav-item">
                  <a
                    href="javascript: void(0);"
                    v-b-toggle.sidebarContacts
                    data-toggle="collapse"
                    class="nav-link"
                  >
                    <span>Contacts</span>
                    <span class="menu-arrow"></span>
                  </a>
                  <b-collapse id="sidebarContacts">
                    <ul class="nav-second-level">
                      <li>
                        <nuxt-link 
                            :to="localePath('/contacts/list')"
                            class="side-nav-link-ref"
                          >Members List</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link
                          :to="localePath('/contacts/profile')"
                          class="side-nav-link-ref"
                          >Profile</nuxt-link
                        >
                      </li>
                    </ul>
                  </b-collapse>
                </li>

                <li class="nav-item">
                  <nuxt-link
                    class="nav-link side-nav-link-ref"
                    :to="localePath('/apps/file-manager')"
                    >File Manager</nuxt-link
                  >
                </li>

                <li class="nav-item">
                  <nuxt-link
                    class="nav-link side-nav-link-ref"
                    :to="localePath('/apps/tickets')"
                    >Tickets</nuxt-link
                  >
                </li>
              </ul>
            </div>

            <div
              class="twocolumn-menu-item d-block"
              id="pages"
              v-if="activetab === 3"
            >
              <div class="title-box">
                <h5 class="menu-title">Pages</h5>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/extras/starter')"
                      >Starter</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/extras/timeline')"
                      >Timeline</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/extras/sitemap')"
                      >Sitemap</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/extras/invoice')"
                      >Invoice</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/extras/faqs')"
                      >FAQs</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/extras/search-results')"
                      >Search Results</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/extras/pricing')"
                      >Pricing</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/extras/maintenance')"
                      >Maintenance</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/extras/coming-soon')"
                      >Coming Soon</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/extras/lightbox')"
                      >Lightbox</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      href="javascript: void(0);"
                      v-b-toggle.sidebarAuth
                      data-toggle="collapse"
                      class="nav-link"
                    >
                      <span>Auth Pages</span>
                      <span class="menu-arrow"></span>
                    </a>
                    <b-collapse class="collapse" id="sidebarAuth">
                      <ul class="nav-second-level">
                        <li>
                          <nuxt-link :to="localePath('/auth/login')">Log In</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/auth/login-2')">Log In 2</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/auth/register')">Register</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/auth/register-2')"
                            >Register 2</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/auth/signin-signup')"
                            >Signin - Signup</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/auth/signin-signup-2')"
                            >Signin - Signup 2</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/auth/recoverpwd')"
                            >Recover Password</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/auth/recoverpwd-2')"
                            >Recover Password 2</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/auth/lock-screen')"
                            >Lock Screen</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/auth/lock-screen-2')"
                            >Lock Screen 2</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/auth/logout')">Logout</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/auth/logout-2')">Logout 2</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/auth/confirm-mail')"
                            >Confirm Mail</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/auth/confirm-mail-2')"
                            >Confirm Mail 2</nuxt-link
                          >
                        </li>
                      </ul>
                    </b-collapse>
                  </li>
                  <li class="nav-item">
                    <a
                      href="javascript: void(0);"
                      v-b-toggle.sidebarErrors
                      data-toggle="collapse"
                      class="nav-link"
                    >
                      Error Pages
                      <span class="menu-arrow"></span>
                    </a>
                    <b-collapse id="sidebarErrors">
                      <ul class="nav-second-level">
                        <li>
                          <nuxt-link :to="localePath('/extras/404')">Error 404</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/extras/404-alt')"
                            >Error 404-alt</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/extras/500')">Error 500</nuxt-link>
                        </li>
                      </ul>
                    </b-collapse>
                  </li>
                </ul>
              </div>
            </div>

            <div
              class="twocolumn-menu-item d-block"
              id="uielements"
              v-if="activetab === 4"
            >
              <div class="title-box">
                <h5 class="menu-title">UI Elements</h5>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/ui/avatars')"
                      >Avatars</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/ui/buttons')"
                      >Buttons</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link 
                        class="nav-link side-nav-link-ref" 
                        :to="localePath('/ui/cards')"
                      >Cards</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/ui/carousel')"
                      >Carousel</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/ui/dropdowns')"
                      >Dropdowns</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link 
                        class="nav-link side-nav-link-ref"
                        :to="localePath('/ui/video')"
                      >Embed Video</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/ui/general')"
                      >General UI</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                        class="nav-link side-nav-link-ref"
                        :to="localePath('/ui/grid')"
                      >Grid</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/ui/images')"
                      >Images</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/ui/list-group')"
                      >List Group</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/ui/modals')"
                      >Modals</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/ui/notifications')"
                      >Notifications</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/ui/portlets')"
                      >Portlets</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/ui/progress')"
                      >Progress</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/ui/ribbons')"
                      >Ribbons</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/ui/spinners')"
                      >Spinners</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/ui/tabs-accordions')"
                      >Tabs & Accordions</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/ui/tooltips-popovers')"
                      >Tooltips & Popovers</nuxt-link
                    >
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link side-nav-link-ref"
                      :to="localePath('/ui/typography')"
                      >Typography</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div
              class="twocolumn-menu-item d-block"
              id="components"
              v-if="activetab === 5"
            >
              <div class="title-box">
                <h5 class="menu-title">Components</h5>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a
                      href="javascript: void(0);"
                      v-b-toggle.sidebarExtendedui
                      data-toggle="collapse"
                      class="nav-link"
                    >
                      <span class="badge badge-info float-right">Hot</span>
                      <span>Extended UI</span>
                    </a>
                    <b-collapse id="sidebarExtendedui">
                      <ul class="nav-second-level">
                        <li>
                          <nuxt-link
                            :to="localePath('/extended/rangeslider')"
                            class="side-nav-link-ref"
                            >Range Slider</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            :to="localePath('/extended/sweet-alert')"
                            class="side-nav-link-ref"
                            >Sweet Alert</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            :to="localePath('/extended/tour')"
                            class="side-nav-link-ref"
                            >Tour Page</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            :to="localePath('/extended/scrollspy')"
                            class="side-nav-link-ref"
                            >Scrollspy</nuxt-link
                          >
                        </li>
                      </ul>
                    </b-collapse>
                  </li>
                  <li class="nav-item">
                    <a
                      href="javascript: void(0);"
                      v-b-toggle.sidebarIcons
                      data-toggle="collapse"
                      class="nav-link"
                    >
                      <span>Icons</span>
                      <span class="menu-arrow"></span>
                    </a>
                    <b-collapse id="sidebarIcons">
                      <ul class="nav-second-level">
                        <li>
                          <nuxt-link
                            :to="localePath('/icons/feather')"
                            class="side-nav-link-ref"
                            >Feather</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link 
                            :to="localePath('/icons/remix')"
                            class="side-nav-link-ref"
                            >Remix</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            :to="localePath('/icons/boxicons')"
                            class="side-nav-link-ref"
                            >Boxicons</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link 
                            :to="localePath('/icons/mdi')"
                            class="side-nav-link-ref"
                            >Material Design</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            :to="localePath('/icons/font-awesome')"
                            class="side-nav-link-ref"
                            >Font Awesome 5</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            :to="localePath('/icons/weather')"
                            class="side-nav-link-ref"
                            >Weather</nuxt-link
                          >
                        </li>
                      </ul>
                    </b-collapse>
                  </li>
                  <li class="nav-item">
                    <a
                      href="javascript: void(0);"
                      v-b-toggle.sidebarForms
                      data-toggle="collapse"
                      class="nav-link"
                    >
                      <span>Forms</span>
                      <span class="menu-arrow"></span>
                    </a>
                    <b-collapse id="sidebarForms">
                      <ul class="nav-second-level">
                        <li>
                          <nuxt-link
                            :to="localePath('/forms/elements')"
                            class="side-nav-link-ref"
                            >General Elements</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            :to="localePath('/forms/advanced')"
                            class="side-nav-link-ref"
                            >Advanced</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            :to="localePath('/forms/validation')"
                            class="side-nav-link-ref"
                            >Validation</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            :to="localePath('/forms/wizard')"
                            class="side-nav-link-ref"
                            >Wizard</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            :to="localePath('/forms/mask')"
                            class="side-nav-link-ref"
                            >Masks</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            :to="localePath('/forms/quill')"
                            class="side-nav-link-ref"
                            >Quill Editor</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            :to="localePath('/forms/file-uploads')"
                            class="side-nav-link-ref"
                            >File Uploads</nuxt-link
                          >
                        </li>
                      </ul>
                    </b-collapse>
                  </li>
                  <li class="nav-item">
                    <a
                      href="javascript: void(0);"
                      v-b-toggle.sidebarTables
                      data-toggle="collapse"
                      class="nav-link"
                    >
                      <span>Tables</span>
                      <span class="menu-arrow"></span>
                    </a>
                    <b-collapse id="sidebarTables">
                      <ul class="nav-second-level">
                        <li>
                          <nuxt-link
                            :to="localePath('/tables/basic')"
                            class="side-nav-link-ref"
                            >Basic Tables</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            :to="localePath('/tables/advanced')"
                            class="side-nav-link-ref"
                            >Advanced Tables</nuxt-link
                          >
                        </li>
                      </ul>
                    </b-collapse>
                  </li>
                  <li class="nav-item">
                    <a
                      href="javascript: void(0);"
                      v-b-toggle.sidebarCharts
                      data-toggle="collapse"
                      class="nav-link"
                    >
                      <span>Charts</span>
                      <span class="menu-arrow"></span>
                    </a>
                    <b-collapse id="sidebarCharts">
                      <ul class="nav-second-level">
                        <li>
                          <nuxt-link
                            :to="localePath('/charts/apex')"
                            class="side-nav-link-ref"
                            >Apex Charts</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            :to="localePath('/charts/chartjs')"
                            class="side-nav-link-ref"
                            >Chartjs Charts</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            :to="localePath('/charts/c3')"
                            class="side-nav-link-ref"
                            >C3 Charts</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            :to="localePath('/charts/chartist')"
                            class="side-nav-link-ref"
                            >Chartist Charts</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            :to="localePath('/charts/knob')"
                            class="side-nav-link-ref"
                            >Knob Charts</nuxt-link
                          >
                        </li>
                      </ul>
                    </b-collapse>
                  </li>
                  <li class="nav-item">
                    <a
                      href="javascript: void(0);"
                      v-b-toggle.sidebarMaps
                      data-toggle="collapse"
                      class="nav-link"
                    >
                      <span>Maps</span>
                      <span class="menu-arrow"></span>
                    </a>
                    <b-collapse id="sidebarMaps">
                      <ul class="nav-second-level">
                        <li>
                          <nuxt-link
                            :to="localePath('/maps/google')"
                            class="side-nav-link-ref"
                            >Google Maps</nuxt-link
                          >
                        </li>
                      </ul>
                    </b-collapse>
                  </li>
                  <li class="nav-item">
                    <a
                      href="javascript: void(0);"
                      v-b-toggle.sidebarMultilevel
                      data-toggle="collapse"
                      class="nav-link"
                    >
                      <span>Multi Level</span>
                      <span class="menu-arrow"></span>
                    </a>
                    <b-collapse class="collapse" id="sidebarMultilevel">
                      <ul class="nav-second-level">
                        <li>
                          <a
                            href="javascript: void(0);"
                            v-b-toggle.sidebarMultilevel2
                            data-toggle="collapse"
                          >
                            Second Level
                            <span class="menu-arrow"></span>
                          </a>
                          <b-collapse id="sidebarMultilevel2">
                            <ul class="nav-second-level">
                              <li>
                                <a href="javascript: void(0);">Item 1</a>
                              </li>
                              <li>
                                <a href="javascript: void(0);">Item 2</a>
                              </li>
                            </ul>
                          </b-collapse>
                        </li>

                        <li>
                          <a href="#sidebarMultilevel3" data-toggle="collapse"
                            >Second Level 1</a
                          >
                        </li>
                      </ul>
                    </b-collapse>
                  </li>
                </ul>
              </div>
            </div>
          </simplebar>
        </div>
        <div class="clearfix"></div>
      </div>
      <!-- End Sidebar -->
    </div>
    <!-- Sidebar -left -->
  </div>
  <!-- Left Sidebar End -->
</template>
