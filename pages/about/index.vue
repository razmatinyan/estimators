<template>
  <div
    class="chatting-shadow flex flex-col min-h-full bg-talksBg flex-1"
    ref="scroller"
  >
    <transition-group name="list">
      <MessageItem
        v-for="message in getMessages"
        :key="message.uuid"
        v-bind="message"
      />
    </transition-group>
    <div v-show="getIsLoading" class="p-2 flex items-center">
      <div class="w-3 h-3 ml-1 mr-1 bg-gray-500 rounded-full animate-ping" />
      <span>Writing </span>
    </div>
  </div>
</template>

<script>
import MessageItem from '@/components/chat/MessageItem'
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  components: { MessageItem },
  data() {
    return {
      generator: null
    }
  },
  mounted() {
    if (this.firstTime) this.nextMessage()
  },
  methods: {
    ...mapActions('about', ['nextMessage', 'addMessage']),
    scrollDown() {
      this.$nextTick(() => {
        const el = this.$refs.scroller
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'end' })
        }
      })
    }
  },
  computed: {
    ...mapState('about', ['firstTime']),
    ...mapGetters('about', ['getMessages', 'getIsLoading'])
  },
  watch: {
    getMessages: {
      handler() {
        this.scrollDown()
      },
      immediate: true
    },
    getIsLoading() {
      this.scrollDown()
    }
  }
}
</script>

<style scoped>
.list-item {
  display: inline-block;
  transform-origin: center center;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.2s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(0.8);
}
</style>
