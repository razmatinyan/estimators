<template>
  <span class="inline-block mb-1">
    <select @change="$emit('changeCurrency', $event.target.value)">
      <option
        v-for="currencyVal in currencies"
        :key="currencyVal"
        :value="currencyVal"
        :selected="currencyVal === currency"
        >{{ currencyVal }}</option
      > </select
    ><input
      type="text"
      placeholder="Price"
      :value="price"
      @input="$emit('changePrice', $event.target.value)"
    />
  </span>
</template>

<script>
export default {
  props: {
    currency: String,
    price: String | Number
  },
  data() {
    return {
      currencies: ['$', '€', '₽', '֏']
    }
  }
}
</script>

<style lang="scss" scoped>
select,
input {
  background-color: transparent;
  border-bottom: 1px solid black;
  border-radius: 0;
  outline: none;
  line-height: 15px;
}
input {
  width: 100px;
}
</style>
