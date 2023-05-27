<template v-if="loaded">
  <div
    v-if="$mq === 'lg' && loaded"
    class="flex h-full justify-center items-center px-36 bg-teamBg 2xl:px-20 xl:px-20 lg:px-16 teamMembersH static"
  >
    <AppSelection />
    <div
      class="self-center h-teamMembersH w-1 bg-teamBg 2xl:h-TeamMembersH2xl xl:h-xlTeamMembersH lg:h-lgThirdH"
    >
      <div
        class="h-teamMembersH w-dividerW bg-pageRed mt-10 2xl:h-TeamMembersH2xl 2xl:mt-1 xl:h-xlTeamMembersH xl:mt-7 lg:mt-7 lg:h-lgThirdH md:h-mdTeamMembersH"
      ></div>
    </div>

    <div class="flex justify-center h-full items-center w-1/2">
      <TeamTalks @select="chechSelection" ref="form" />
    </div>
  </div>
  <div v-else-if="loaded">
    <TeamTalks @select="chechSelection" ref="form" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import TeamTalks from '@/components/TeamTalks'
import AppSelection from './AppSelection.vue'
import EventBus from '@/helpers/EventBus'

export default {
  data() {
    return {
      loaded: false
    }
  },
  name: 'TeamMembers',
  created() {
    EventBus.$on('buttonClicked', this.openRightMenu)
  },
  beforeDestroy() {
    EventBus.$off('buttonClicked', this.openRightMenu)
  },
  components: { AppSelection, TeamTalks },
  watch: {
    getConductorButtonText(val) {
      if (!val) {
        this.setSecondPageActive(false)
      }
    }
  },
  computed: {
    ...mapGetters('dialog', [
      'getSelectedCategs',
      'getSecondPageActive',
      'getConductorButtonText'
    ])
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    ...mapActions('dialog', [
      'changeConductorButtonText',
      'setSecondPageActive'
    ]),
    openRightMenu() {
      if (!this.getConductorButtonText) return
      if (!this.getSecondPageActive) {
        this.setSecondPageActive(true)
        this.changeConductorButtonText('Send')
      } else {
        // alert('mtav')
        this.$refs.form.sendData()
      }
    },
    chechSelection(witch) {
      if (
        witch &&
        this.getSelectedCategs.length > 0 &&
        !this.getConductorButtonText
      ) {
        this.changeConductorButtonText('Request to Estimate')
      } else if (!witch) this.changeConductorButtonText('')
    }
  }
}
</script>

<style scoped>
/* .teamMembersH {
  min-height: calc(100vh - 8.5rem - 9rem);
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .teamMembersH {
    min-height: calc(100vh - 3.5rem - 9rem);
  }
}

@media (min-width: 1535px) and (max-width: 1920px) {
  .teamMembersH {
    height: calc(100vh - 6rem - 9rem);
  }
} */
</style>
