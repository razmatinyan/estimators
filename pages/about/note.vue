<template>
  <div class="py-3">
    <div class="flex">
      <Checkbox
        label="Created by me"
        v-model="checkboxes.created"
        class="mr-3"
      />
      <Checkbox label="Followed" v-model="checkboxes.followed" />
    </div>
    <hr class="w-full border-black my-2 " />
    <div class="flex">
      <div class="flex-1 pr-3 relative">
        <img
          src="../../assets/images/FrontendContractImg/loupe.svg"
          class="absolute left-3 top-1/2 h-5 w-5 cursor-text"
          style="transform: translateY(-50%)"
          @click="focusInput"
        />
        <input
          class="rounded-md pl-10 w-full py-1 pr-3 outline-none border-gray-300 border-2"
          type="text"
          id="search"
          placeholder="Search Notes"
          ref="search"
          v-model="searchVal"
        />
      </div>
      <Checkbox
        label="Show archived"
        v-model="checkboxes.archived"
        position="left"
      />
    </div>
    <div>
      <div class="flex flex-wrap">
        <button
          @click="addTask"
          class="bg-pageBlue text-white mt-2 px-3 py-2 rounded-lg hover:opacity-95"
        >
          {{ !addingTask ? 'Add Note' : 'Save' }}
        </button>
        <button
          class="px-3 py-2 mx-3 rounded-lg mt-2 hover:bg-gray-300"
          style=""
          v-show="addingTask"
          @click="cancleTask"
        >
          Cancel
        </button>
        <input
          v-show="addingTask"
          v-model="newTask"
          class="rounded-md mt-2 flex-1 py-1 px-3 outline-none border-gray-300 border-2"
          type="text"
          id="search"
          placeholder="New Task"
          @keyup.enter="addTask"
          ref="newTask"
        />
      </div>
      <div class="tasks">
        <ul class="flex flex-col-reverse">
          <li
            v-for="(task, index) in tasks"
            :key="index"
            class="border-b border-black mt-2 px-1"
          >
            {{ tasks.length - index }}. {{ task }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from '../../components/Checkbox.vue'
export default {
  components: {
    Checkbox
  },
  data() {
    return {
      newTask: '',
      searchVal: '',
      addingTask: false,
      checkboxes: {
        archived: false,
        created: false,
        followed: false
      },
      tasks: []
    }
  },
  methods: {
    focusInput() {
      this.$refs.search.focus()
    },
    addTask() {
      if (!this.addingTask) {
        this.addingTask = true
        console.log(this.$refs.newTask)
        this.$nextTick(() => {
          this.$refs.newTask.focus()
        })
        return
      }
      if (!this.newTask) return
      this.tasks.push(this.newTask)
      this.newTask = ''
      this.$refs.newTask.focus()
    },
    cancleTask() {
      this.addingTask = false
      this.newTask = ''
    }
  }
}
</script>

<style scoped>
button {
  outline: none !important;
}
</style>
