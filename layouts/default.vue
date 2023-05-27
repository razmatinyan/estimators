<script>
import { mapState } from 'vuex'

import Vertical from './vertical'

/**
 * Default Layout
 */
export default {
  middleware: ['route', 'role'],

  components: {
    Vertical
  },
  data() {
    return {}
  },
  computed: mapState(['layout'])
}
</script>

<template>
  <div>
    <!-- Begin page -->
    <Vertical :layout="layout.layoutType">
      <Nuxt />
    </Vertical>
    <!-- END layout-wrapper -->
  </div>
</template>
