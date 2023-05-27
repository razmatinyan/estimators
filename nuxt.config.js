export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  loading: '~/components/Loading.vue',
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  router: {
	extendRoutes(routes) {
	  routes.push({
		path: '/',
		component: '~/pages/dashboard/index.vue'
	  })
	}
  },

  head: {
	title: 'Estimators',
	meta: [
	  { charset: 'utf-8' },
	  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
	  {
		name: 'google-site-verification',
		content: 'VRBeKyWaXdTRxgYkprFpd07y5pVxg_r1KN4w1PsSQHg'
	  },
	  {
		hid: 'description',
		name: 'description',
		content: process.env.npm_package_description || ''
	  }
	],
	link: [{ rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
	script: [
	  {
		src: 'https://www.googletagmanager.com/gtag/js?id=G-CY2VH5V23Z'
	  }
	]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
	'~layouts/global.css',
	'~/assets/scss/app.scss',
	'quill/dist/quill.core.css',
	'quill/dist/quill.snow.css',
	'quill/dist/quill.bubble.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
	{ src: '~plugins/v-calendar.js', ssr: false },
	{ src: '~plugins/v-sign.js', ssr: false },
	'~/plugins/gtag.js',
	'~/plugins/simplebar.js',
	'~/plugins/vue-click-outside.js',
	'~/plugins/vuelidate.js',
	'~/plugins/draggable.js',
	'~/plugins/init',
	'~/plugins/vue-slidebar.js',
	'~/plugins/tour.js',
	'~/plugins/vue-lightbox.js',
	'~/plugins/mask.js',
	'~/plugins/quill-editor.js',
	'~/plugins/chartist.js',
	'~/plugins/vue-googlemap.js',
	'~/plugins/string-filter',
	'~/plugins/vue-phone-number-input.js',
	'~/plugins/vue-place-autocomplete.js'
  ],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
	// https://go.nuxtjs.dev/tailwindcss
	'@nuxtjs/tailwindcss',
	'nuxt-gsap-module'
  ],

  gsap: {
	extraPlugins: {
	  cssRule: true
	}
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
	'bootstrap-vue/nuxt',
	[
		'nuxt-i18n',
		{
			locales: [
				{
					code: 'en',
					iso: 'en-US',
					name: 'English',
					file: 'en.js',
					flag: 'en.svg'
				},
				{
					code: 'ru',
					iso: 'ru-RU',
					name: 'Russian',
					file: 'ru.js',
					flag: 'ru.svg'
				},
				{
					code: 'hy',
					iso: 'hy-HY',
					name: 'Armenian',
					file: 'hy.js',
					flag: 'hy.svg'
				},
			],
			strategy: 'prefix_except_default',
			defaultLocale: 'en',
			langDir: 'locales/',
			lazy: true,
			detectBrowserLanguage: {
				useCookie: true,
				cookieKey: 'i18n_redirected',
				redirectOn: 'root',  // recommended
				alwaysRedirect: true
			},

			vueI18n: {
				fallbackLocale: 'en',
				silentTranslationWarn: true
			}
		}
	],
	'@nuxtjs/axios',
	'@nuxtjs/proxy',
	// Simple usage
	[
	  'nuxt-mq',
	  {
		// Default breakpoint for SSR
		defaultBreakpoint: 'lg',
		breakpoints: {
		  sm: 450,
		  md: 1024,
		  lg: Infinity
		}
	  }
	]
  ],
//   i18n: {
//     locales: ['en', 'ru', 'hy'],
//     defaultLocale: 'en',
//     vueI18n: {
//       fallbackLocale: 'en',
//       messages: {
//         en: require('./locales/en.js'),
//         ru: require('./locales/ru.js'),
//         hy: require('./locales/hy.js'),
//       },
//       preserveDirectiveContent: true,
//     }
//   },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  env: {
	auth: process.env.VUE_APP_DEFAULT_AUTH,
	apikey: process.env.VUE_APP_APIKEY,
	authdomain: process.env.VUE_APP_AUTHDOMAIN,
	databaseurl: process.env.VUE_APP_DATABASEURL,
	projectid: process.env.VUE_APP_PROJECTId,
	storgebucket: process.env.VUE_APP_STORAGEBUCKET,
	message: process.env.VUE_APP_MESSAGINGSENDERID,
	appid: process.env.VUE_APP_APPId,
	measurement: process.env.VUE_APP_MEASUREMENTID
  }
}
