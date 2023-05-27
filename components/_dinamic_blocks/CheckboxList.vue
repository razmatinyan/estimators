<template>
<!--  <div class="design-skill-wrapper w-1/2 mx-auto px-12 py-6 space-y-10">-->
<!--    <p class="text-pageBlue font-bold text-xl -mb-4">{{ title_header }}</p>-->
<!--    <div class="flex justify-between">-->
<!--      <div v-for="list in checkList" class="flex flex-col space-y-3" :key="list.id">-->
<!--        <label class="flex items-center" v-for="data in list.data" :key="data.id">-->
<!--          <input type="checkbox" class="form-checkbox h-6 w-6">-->
<!--          <span class="ml-2 text-lg">{{ data.title }}</span>-->
<!--        </label>-->

<!--      </div>-->
<!--    </div>-->
<!--    <div class="">-->
<!--      <p class="text-pageBlue font-bold text-xl mb-4">{{ title_main }}</p>-->
<!--      <div-->
<!--        class="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center border-2 border-pageBlue rounded-lg mb-6">-->
<!--        <div class="flex -mr-px justify-center w-15 p-4">-->
<!--        </div>-->
<!--        <input-->
<!--          type="password"-->
<!--          class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"-->
<!--          placeholder="Some skill"-->
<!--        />-->
<!--        <div class="flex mr-px">-->
<!--              <span-->
<!--                class="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">-->
<!--                <img src="../../assets/images/BePartnerImg/add.png" alt="add" class="h-8 w-10">-->
<!--              </span>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="flex justify-end -my-4 text-gray-500">{{ title_body }}</div>-->
<!--    </div>-->
<!--    <div class="">-->
<!--      <p class="text-pageBlue font-bold text-xl mb-4">{{ title_footer }}</p>-->
<!--      <div class="flex justify-between">-->
<!--        <div v-for="list_d in checkListMain"-->
<!--             class="flex flex-col space-y-3"-->
<!--             :key="list_d.id"-->
<!--        >-->
<!--          <label class="flex items-center" v-for="dat in list_d.data" :key="dat.id">-->
<!--            <input type="checkbox" class="form-checkbox h-6 w-6">-->
<!--            <span class="ml-2 text-lg">{{ dat.title }}</span>-->
<!--          </label>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="">-->
<!--      <p class="text-pageBlue font-bold text-xl mb-4">I want to work</p>-->
<!--      <div>-->
<!--        <div class="flex justify-between mb-10">-->
<!--          <label class="flex items-center" v-for="f_data in checkListFooter" :key="f_data.id">-->
<!--            <input type="checkbox" class="form-checkbox h-6 w-6">-->
<!--            <span class="ml-2 text-lg">{{ f_data.title }}</span>-->
<!--          </label>-->

<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <div>
    <button @click="hd"> click</button>
  </div>
</template>

<script>
export default {
  name: "CheckboxList",
  props: ['checkList', 'checkListMain', 'checkListFooter', 'title_header', 'title_main', 'title_body', 'title_footer'],
  methods:{

  }
}
</script>


