import Vue from 'vue'
import * as VueGoogleMaps from 'gmap-vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCFGWmuYhj6cgEORPCk6TLuhGAto35Yfes',
    libraries: 'places' // This is required if you use the Autocomplete plugin
  },
  installComponents: true
})
