<template>
  <div class="bg-teamBg">
    <TeamMembers />
  </div>
</template>

<script>
import TeamMembers from '@/components/TeamMembers'

export default {
  name: 'index',
  head() {
    return {
      title: 'Get estimation of IT projects — Estimators',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Sign up for a free consultation and find out the estimation of the cost and the required time to develop your project.'
        }
      ]
    }
  },
  layout: 'homeDefault',
  components: {
    TeamMembers
  }
}
</script>
