<template>
  <Conductor
    :className="{ 'cursor-pointer': getConductorButtonText }"
    @send="send"
  >
    <!-- openRightMenu -->
    <transition mode="out-in" name="slide-fade">
      <span :key="getConductorButtonText">
        {{ getConductorButtonText }}
      </span>
    </transition>
  </Conductor>
</template>

<script>
import Conductor from '@/components/Conductor'
import EventBus from '@/helpers/EventBus'
import { mapGetters } from 'vuex'

export default {
  components: {
    // SelectOneTwo,
    // TeamMembers,
    Conductor
    // lottie
  },
  computed: {
    ...mapGetters('dialog', ['getConductorButtonText'])
  },
  methods: {
    send(event) {
      EventBus.$emit('buttonClicked', event)
    }
  }
}
</script>

<style lang="scss" scoped></style>
