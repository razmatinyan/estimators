<template>
  <div
    class="team-talk-wrapper flex items-center 2xl:px-10 2xl:mt-8 xl:px-10 xl:mt-4 lg:px-6 2xl:h-TeamTalksH2xl xl:h-xlTeamTalksH lg:h-lgTeamTalksH"
  >
    <div class="flex flex-col justify-center">
      <div
        class="flex flex-col w-teamTalkW 2xl:w-TeamMembersW2xl xl:w-teamTalksWxl lg:w-teamTalkWlg"
      >
        <div class="flex justify-between">
          <TeamTalksCard
            className="ui-ux"
            :isTop="true"
            name="idea"
            title="Have an Idea"
            @select="openQuesions"
          >
            <p class="text-small tracking-tighter leading-none text-center">
              Based on your idea, we will make a estimate your product, choose a
              development methodology, gather the necessary specialists and
              organize a development.
            </p>
          </TeamTalksCard>
          <TeamTalksCard
            className="qa"
            name="product"
            :isTop="true"
            @select="openQuesions"
            title="Have a Product"
          >
            <p class="text-small tracking-tighter leading-none">
              We will provide technical and product audit, prioritize the
              backlog and gather a team that specializes on your technology
              stack.
            </p>
          </TeamTalksCard>
          <TeamTalksCard
            className="backend"
            name="specialist"
            :isTop="true"
            @select="openQuesions"
            title="Need Specialist"
          >
            <p class="text-small tracking-tighter leading-none">
              Will help you build your team and communicate with them through
              our platform, taking responsibility for the result of the services
              provided.
            </p>
          </TeamTalksCard>
        </div>
        <div class="flex justify-around xl:space-x-1 lg:space-x-2">
          <TeamTalksCard className="pm" :isTop="false" title="Project Manager">
            <div v-show="question.pm">
              <h3>
                {{ question.pm }}
                <input type="radio" name="pm" />
                <input type="radio" name="pm" />
              </h3>
            </div>
          </TeamTalksCard>
          <TeamTalksCard className="team-lead" :isTop="false" title="Team Lead">
            <div v-show="question.teamLead">
              <h3>
                {{ question.teamLead }}
                <input type="radio" name="teamLead" />
                <input type="radio" name="teamLead" />
              </h3>
            </div>
          </TeamTalksCard>
          <TeamTalksCard
            className="frontend"
            :isTop="false"
            title="Ui/Ux Designer"
          >
            <div v-show="question.uiux">
              <h3>
                {{ question.uiux }}
                <input type="radio" name="uiux" />
                <input type="radio" name="uiux" />
              </h3>
            </div>
          </TeamTalksCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TeamTalksCard from './TeamTalksCard'

export default {
  name: 'TeamTalks',
  components: { TeamTalksCard },
  data() {
    return {
      dataList: {
        frontend: [],
        backend: []
      },
      checkBocks: {
        p_manager: null,
        pm: null,
        ua_ux: null
      },
      formData: {
        name: '',
        email: '',
        phone: ''
      },
      front_end: [
        'React.js',
        'HTML/CSS',
        'javaScript/jQuery',
        'Vue.js',
        'Angular'
      ],
      question: {
        pm: '',
        teamLead: '',
        uiux: ''
      },
      back_end: ['Node.js', 'Java', 'PHP', 'Python', 'Laravel'],
      isFullChange: false
    }
  },
  methods: {
    emptyQuestion() {
      this.question = {
        pm: '',
        teamLead: '',
        uiux: ''
      }
    },
    changeSelectData(name, item) {
      let array = this.dataList[name]
      let index = array.indexOf(item)
      index < 0 ? array.push(item) : array.splice(index, 1)
    },
    checkBocksChange(e) {
      this.checkBocks[e.target.name] = e.target.value === 'yes'
      this.isFull()
    },
    isFull() {
      const {
        dataList: { backend, frontend },
        checkBocks: { p_manager, pm, ua_ux }
      } = this
      if (
        backend.length > 0 &&
        frontend.length > 0 &&
        p_manager !== null &&
        pm !== null &&
        ua_ux !== null
      ) {
        this.isFullChange = true
      }
    },
    openQuesions(questionList) {
      this.question = questionList
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

.frontend-wrapper:hover .frontend-img {
  background-image: url('../assets/images/TeamMembersImg/frontback2.png');
}

.pm-img {
  background-image: url('../assets/images/TeamMembersImg/pm1.png');
}

.pm-wrapper:hover .pm-img {
  background-image: url('../assets/images/TeamMembersImg/pm2.png');
}

.backend-img {
  background-image: url('../assets/images/TeamMembersImg/frontback1.png');
}

.backend-wrapper:hover .backend-img {
  background-image: url('../assets/images/TeamMembersImg/frontback2.png');
}

.qa-img {
  background-image: url('../assets/images/TeamMembersImg/qa1.png');
}

.qa-wrapper:hover .qa-img {
  background-image: url('../assets/images/TeamMembersImg/qa2.png');
}

.team-lead-img {
  background-image: url('../assets/images/TeamMembersImg/teamlead2.png');
}

.team-lead-wrapper:hover .team-lead-img {
  background-image: url('../assets/images/TeamMembersImg/teamlead1.png');
}

.ui-ux-img {
  background-image: url('../assets/images/TeamMembersImg/uiux2.png');
}

.ui-ux-wrapper:hover .ui-ux-img {
  background-image: url('../assets/images/TeamMembersImg/uiux1.png');
}

@media only screen and (min-device-width: 1700px) and (max-device-width: 1800px) {
  .team-talk-wrapper {
    padding: 40px 100px 0 100px;
  }
}

@media only screen and (min-device-width: 1800px) and (max-device-width: 1920px) {
  .team-talk-wrapper {
    padding: 40px 150px 0 150px;
  }
}
</style>
