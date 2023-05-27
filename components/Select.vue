<template>
  <div class="relative">
    <select
      v-if="!multiple"
      style="border-bottom: solid black 1px"
      class="w-full bg-transparent h-5 text-right pr-3"
      :value="value"
      @change="e => $emit('input', e.target.value)"
    >
      <option
        v-for="option in options"
        :key="option.id"
        :disabled="!option.id"
        :value="option.id"
        >{{ option.name }}</option
      >
    </select>
    <Multiselect
      v-else
      @input="e => $emit('input', e)"
      :value="value"
      :options="options"
      :multiple="true"
      :close-on-select="false"
      :clear-on-select="false"
      :preserve-search="true"
      :placeholder="null"
      label="name"
      track-by="name"
    >
      <template slot="selection" slot-scope="{ values }"
        ><span class="multiselect__single" v-if="values.length"
          >{{ values.length }} options selected</span
        >
        <span class="multiselect__single" v-else
          >Please select technology</span
        ></template
      >
    </Multiselect>
    <span class="underSelect absolute left-1 top-full"
      ><i>{{ label }}</i></span
    >
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  components: { Multiselect },
  props: {
    value: String | Array,
    options: Array,
    label: String,
    multiple: Boolean
  }
}
</script>

<style lang="scss" scoped>
.underSelect {
  font-size: 12px;
}
::v-deep .multiselect {
  min-height: auto !important;
  ul li span.multiselect__option--selected {
    background-color: #841f3b !important;
    color: white !important;
    &::before,
    &::after {
      color: white !important;
      background-color: #841f3b !important;
    }
  }
  .multiselect__select {
    height: 10px !important;
    &::before {
      top: 100% !important;
      height: 10px !important;
    }
  }
  .multiselect__tags {
    max-height: 22px !important;
    padding-bottom: 0 !important;
    padding-top: 0 !important;
    min-height: auto !important;
    border: none !important;
    border-bottom: solid black 1px !important;
    border-radius: 0 !important;
    background-color: transparent !important;
    color: black !important;
    > span.multiselect__single {
      text-align: right !important;
      padding-bottom: 2px !important;
      background-color: transparent !important;
      padding-right: 24px;
    }
    > input.multiselect__input {
      margin-top: 20px !important;
    }
  }
}
@media screen and (max-width: 545px) {
  .underSelect {
    font-size: 10px;
  }
}
</style>
