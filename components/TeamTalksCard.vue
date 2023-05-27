<template>
  <div
    class="flex flex-col items-center mb-10 2xl:mb-2 xl:mb-2 lg:mb-0 relative p-3"
    :class="[
      `${className}-wrapper`,
      {
        isActive: hoverLogic,
        'cursor-pointer': hoverLogic && isTop
      }
    ]"
    @mouseover="isOver = true"
    @mouseleave="isOver = false"
    @click="selectType"
  >
    <div
      class="coverDiv absolute w-full h-full shadow top-0 opacity-0 left-0 transition-all"
      :class="
        hoverLogic || isCurrenSelected
          ? 'opacity-100'
          : `${isTop ? '-' : ''}top-4`
      "
      :style="
        `box-shadow: #${
          isTop ? (isCurrenSelected ? '9E00F4' : '841f3b') : '016189'
        } 0 0 15px 0px;`
      "
    ></div>
    <template v-if="!isTop">
      <div
        class="bg-center bg-contain h-28 w-36 bg-no-repeat mb-4 2xl:mb-1 2xl:h-20 xl:mb-1 xl:h-26 xl:w-36 lg:h-20 lg:w-20 lg:mb-1"
        :class="`${className}-img`"
      ></div>
      <p
        class="frontend-text text-pageBlue text-xl 2xl:text-lg xl:text-lg lg:text-sm"
      >
        {{ title }}
      </p>
    </template>
    <div
      class="relative"
      :class="{ 'mt-8': !isTop, 'flex-col-reverse': !isTop }"
    >
      <div
        class="h-28 w-44 bg-talksBg rounded-md mb-4 2xl:mb-2 2xl:w-40 xl:mb-2 xl:h-22 xl:w-36 lg:h-20 lg:w-28 lg:mb-2"
      >
        <div v-if="getDialogStarted" :class="{ 'text-center mt-2': isTop }">
          <slot></slot>
        </div>
      </div>
      <div
        class="absolute"
        :class="[
          `triangle-${isTop ? 'down' : 'left'}`,
          { hidden: !hoverLogic }
        ]"
      ></div>
    </div>
    <template v-if="isTop">
      <div
        class="bg-center bg-contain h-28 w-36 bg-no-repeat mb-4 2xl:mb-1 2xl:h-20 xl:mb-1 xl:h-26 xl:w-36 lg:h-20 lg:w-20 lg:mb-1"
        :class="`${className}-img`"
      ></div>
      <p
        class="frontend-text text-pageBlue text-xl 2xl:text-lg xl:text-lg lg:text-sm"
      >
        {{ title }}
      </p>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TeamTalksCard',
  props: {
    className: String,
    isTop: Boolean,
    title: String,
    name: String
  },
  data() {
    return {
      isOver: false
    }
  },
  computed: {
    ...mapGetters('dialog', [
      'getDialogStarted',
      'getQuestions',
      'getProjectType'
    ]),
    hovered() {
      return this.isOver && this.getDialogStarted
    },
    hoverLogic() {
      if (!this.isTop && this.getProjectType) return this.getDialogStarted
      return this.hovered && (this.isTop || this.getProjectType)
    },
    isCurrenSelected() {
      return this.name === this.getProjectType && this.getDialogStarted
    }
  },
  methods: {
    ...mapActions('dialog', ['setType']),
    selectType() {
      if (this.isTop && this.getDialogStarted) {
        this.setType(this.name)
          .then(() => {
            this.$emit('select', this.getQuestions(this.name))
          })
          .catch(err => {
            console.error('Something went wrong:', err)
          })
      }
    }
  }
}
</script>

<style scoped>
.triangle-down {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 0 solid transparent;
  border-top: 15px solid #dfdddd;
  bottom: -5px;
  left: 20px;
}

.triangle-left {
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-right: 15px solid #dfdddd;
  border-bottom: 0 solid transparent;
  top: -15px;
  left: 30px;
}

.frontend-img {
  background-image: url('../assets/images/TeamMembersImg/frontback1.png');
}

.frontend-wrapper.isActive:hover .frontend-img {
  background-image: url('../assets/images/TeamMembersImg/frontback2.png');
}

.qa-img {
  background-image: url('../assets/images/TeamMembersImg/qa1.png');
}

.qa-wrapper.isActive:hover .qa-img {
  background-image: url('../assets/images/TeamMembersImg/qa2.png');
}

.backend-img {
  background-image: url('../assets/images/TeamMembersImg/frontback1.png');
}

.backend-wrapper.isActive:hover .backend-img {
  background-image: url('../assets/images/TeamMembersImg/frontback2.png');
}

.pm-img {
  background-image: url('../assets/images/TeamMembersImg/pm1.png');
}

.pm-wrapper.isActive:hover .pm-img {
  background-image: url('../assets/images/TeamMembersImg/pm2.png');
}

.team-lead-img {
  background-image: url('../assets/images/TeamMembersImg/teamlead2.png');
}

.team-lead-wrapper.isActive:hover .team-lead-img {
  background-image: url('../assets/images/TeamMembersImg/teamlead1.png');
}

.ui-ux-img {
  background-image: url('../assets/images/TeamMembersImg/uiux2.png');
}

.ui-ux-wrapper.isActive:hover .ui-ux-img {
  background-image: url('../assets/images/TeamMembersImg/uiux1.png');
}
</style>
