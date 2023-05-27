<script>
/**
 * Starter component
 */
export default {
  head() {
    return {
      title: `${this.title} | Estimators - Nuxtjs Responsive Admin Dashboard Template`
    }
  },
  data() {
    return {
      title: 'Starter',
      items: [
        {
          text: 'Estimators',
          href: '/'
        },
        {
          text: 'Pages',
          href: '/'
        },
        {
          text: 'Starter',
          active: true
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />
  </div>
</template>
