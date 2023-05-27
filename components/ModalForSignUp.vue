<template>
  <!--  <div class="flex flex-col mx-auto w-full">-->
  <!--    <div class="flex justify-center items-center text-5xl font-bold mt-20">I WANT TO</div>-->
  <!--    <div class="flex justify-between mt-28">-->
  <!--      <div class="w-1/2 flex justify-center items-center text-5xl font-bold">-->
  <!--        <div class="flex items-center justify-center">-->
  <!--          <NuxtLink to="/EstimateProjectPage">Estimate my projects</NuxtLink>-->

  <!--        </div>-->
  <!--      </div>-->
  <!--      <div class="w-1/2 flex justify-center items-center text-5xl font-bold">-->
  <!--        &lt;!&ndash;      <NuxtLink to="/signUp">Be partner</NuxtLink>&ndash;&gt;-->
  <!--        <div class="flex justify-center items-center">-->
  <!--          <div class="partner-wrapper">-->
  <!--            <div class="relative  text-left">-->
  <!--              <div class="flex justify-center items-center">-->
  <!--                <div @click="toggleDropdown"-->
  <!--                     class="inline-flex justify-center text-black"-->
  <!--                     id="options-menu" aria-haspopup="true" aria-expanded="true">-->
  <!--                  Be Partner-->
  <!--                  <svg class="-mr-1 ml-2 h-16 w-16 self-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"-->
  <!--                       fill="currentColor" aria-hidden="true">-->
  <!--                    <path fill-rule="evenodd"-->
  <!--                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"-->
  <!--                          clip-rule="evenodd"/>-->
  <!--                  </svg>-->
  <!--                </div>-->

  <!--              </div>-->
  <!--              <div-->
  <!--                class="overflow-scroll origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 z-10"-->
  <!--                v-if="isOpen">-->
  <!--                <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">-->
  <!--                  <NuxtLink to="/PartnerFrontEnd" class="block px-4 py-2 text-xl text-gray-600 hover:bg-gray-100 hover:text-black"-->
  <!--                            role="menuitem">Frontend Developer</NuxtLink>-->
  <!--                  <NuxtLink to="/PartnerBackEnd" class="block px-4 py-2 text-xl text-gray-600 hover:bg-gray-100 hover:text-black"-->
  <!--                            role="menuitem">Backend Developer</NuxtLink>-->
  <!--                  <NuxtLink to="/PartnerProjectManager" class="block px-4 py-2 text-xl text-gray-600 hover:bg-gray-100 hover:text-black"-->
  <!--                            role="menuitem">Project Manager</NuxtLink>-->
  <!--                  <NuxtLink to="/PartnerQA" class="block px-4 py-2 text-xl text-gray-600 hover:bg-gray-100 hover:text-black"-->
  <!--                            role="menuitem">QA Engineer</NuxtLink>-->
  <!--                  <NuxtLink to="/PartnerUiUxDesigner" class="block px-4 py-2 text-xl text-gray-600 hover:bg-gray-100 hover:text-black"-->
  <!--                            role="menuitem">Ui/Ux Designer</NuxtLink>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </div>-->

  <!--          </div>-->

  <!--        </div>-->

  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <div></div>
</template>

<script>
export default {
  name: 'ModalForSignUp',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped></style>
