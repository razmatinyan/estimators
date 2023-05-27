<template>
  <div class="p-2 space-y-2">
    <div class="flex items-center space-between">
      <img
        src="../../assets/images/AboutCompanyImg/Rules2.svg"
        alt="stopWords"
        class="h-16 mr-3"
      />
      <h1 class="font-bold text-pageRed" style="font-size: 20px">
        We do not accept the following words and phrases when the task is not
        complete, or the result is not achieved:
      </h1>
    </div>

    <div class="flex">
      <div class="mr-2">
        <div
          v-for="i in 12"
          :key="i"
          class=" bg-pageBlue rounded-full"
          style="width: 25px; height: 25px; margin: 5px 0 8px"
        />
      </div>
      <div class="relative leftInner flex-1">
        <div class="top-0 left-0 right-0 absolute">
          <hr
            v-for="i in 13"
            :key="i"
            class="pb-8 w-full"
            style="border-color:#000"
          />
        </div>

        <ul class="list-none listing">
          <li>There was no time</li>
          <li>I've been busy</li>
          <li>I didn't make it on time</li>
          <li>I'll do it tomorrow</li>
          <li>They did not give me the info</li>
          <li>They let me down</li>
          <li>I didn't understood the task</li>
          <li>Everything is done, but…</li>
          <li>This isn't my responsibility</li>
          <li>The client doesn't want it</li>
          <li>I've forgotten it</li>
        </ul>
      </div>
    </div>

    <p class="text-md text-pageRed font-bold m-0">
      Each team member can plan their time, play it safe, warn the team lead,
      ask for more information and assistance, and do the task in advance.
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.listing {
  padding-top: 34px;
}
.listing > li {
  height: 33px;
  line-height: 33px;
  padding-left: 10px;
}
</style>
