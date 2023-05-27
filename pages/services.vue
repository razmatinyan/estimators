<template>
  <div class="flex flex-col fullWrapper">
	<b-modal centered id="modalService" hide-footer>
	  <template #modal-title> Your contact info </template>
	  <div class="d-block text-center">
		<div class="flex flex-wrap">
		  <div class="flex flex-1 flex-col p-1">
			<label for="name"
			  ><span class="text-red-500">*</span> First Name</label
			>
			<input
			  class="p-1 border-2"
			  type="text"
			  v-model="name"
			  :class="[nameNotValid ? 'border-pageRed' : 'border-pageBlue']"
			  id="name"
			/>
		  </div>
		  <div class="flex flex-1 flex-col p-1">
			<label for="lname"
			  ><span class="text-red-500">*</span> Last Name</label
			>
			<input
			  class="p-1 border-2"
			  v-model="lname"
			  :class="[lnameNotValid ? 'border-pageRed' : 'border-pageBlue']"
			  type="text"
			  id="lname"
			/>
		  </div>
		</div>
		<div class="flex flex-wrap">
		  <div class="flex flex-1 flex-col p-1">
			<label for="phone"><span class="text-red-500">*</span> Phone</label>
			<input
			  class="p-1 border-2"
			  v-model="phone"
			  :class="[phoneNotValid ? 'border-pageRed' : 'border-pageBlue']"
			  type="text"
			  id="phone"
			/>
		  </div>
		  <div class="flex flex-1 flex-col p-1">
			<label for="email"><span class="text-red-500">*</span> Email</label>
			<input
			  class="p-1 border-2"
			  type="text"
			  v-model="email"
			  :class="[emailNotValid ? 'border-pageRed' : 'border-pageBlue']"
			  id="email"
			/>
		  </div>
		</div>
		<div class="p-1 flex flex-col flex-1">
		  <label for="message"
			><span class="text-red-500">*</span> Message</label
		  >
		  <textarea
			id="message"
			v-model="message"
			:class="[messageNotValid ? 'border-pageRed' : 'border-pageBlue']"
			class="w-full flex-1 resize-none p-1 border-2"
		  ></textarea>
		</div>
	  </div>
	  <b-button
		class="mt-3 hover:opacity-95"
		style="background-color: #016189 !important"
		block
		@click="submitMessage"
		>Submit</b-button
	  >
	</b-modal>
	<div class="base bg-teamBg flex-1 flex items-center">
	  <div
		class="flex flex-wrap justify-center m-auto"
		style="max-width: 1600px"
	  >
		<div
		  v-for="(service, serviceKey) in services"
		  :key="serviceKey"
		  class=" border-t-4 border-pageBlue  pt-2 m-4"
		  style="max-width: 400px; width: 100%"
		>
		  <b class="text-pageBlue" style="font-size: 20px">{{ serviceKey }}</b>
		  <ul
			class="relative mt-2"
			:style="{ 'padding-top': service.bgType === 'dot' ? '15px' : '0' }"
		  >
			<div
			  v-if="service.bgType === 'solid'"
			  class="solid absolute top-0 left-0 right-0"
			>
			  <hr
				v-for="i in 8"
				:key="i"
				class="pb-8 w-full"
				style="border-color:#000"
			  />
			</div>
			<div
			  v-if="service.bgType === 'dotdash'"
			  class="solid absolute top-0 left-0 right-0 mt-2"
			>
			  <div
				v-for="i in 4"
				:key="i + i + 15"
				class="flex items-end"
				style="margin-bottom: 46.5px"
			  >
				<div class="w-5 h-5 rounded-full bg-pageBlue" />
				<hr class="w-full" style="border-color:#000" />
			  </div>
			</div>
			<div
			  v-if="service.bgType === 'dot'"
			  class="absolute top-0 left-0 right-0 bottom-0 dotbg pb-3"
			  style="height: 260px"
			></div>
			<template v-for="(option, i) in service.options">
			  <li
				:key="option"
				@click="toggle(serviceKey, option)"
				:class="[
				  'relative flex items-center cursor-pointer',
				  { 'flex-row-reverse': !(i % 2) && service.bgType === 'dot' }
				]"
				style="line-height: 33px; font-size: 16px; height: 33px"
				:style="{
				  padding:
					service.bgType !== 'solid'
					  ? `0 ${
						  service.bgType === 'dot' ? '1.75rem' : '0'
						} 0 1.75rem`
					  : '0 0.25rem'
				}"
			  >
				<span> {{ option }} </span>

				<Chackbox
				  class="ml-2"
				  v-show="option"
				  :value="option && service.selected.includes(option)"
				></Chackbox>
			  </li>
			  <span
				v-if="i !== service.options.length - 1"
				style="line-height: 33px; font-size: 16px; height: 33px;"
				class="select-none"
				:key="option + '1256'"
				>&nbsp;</span
			  >
			</template>
		  </ul>
		</div>
	  </div>
	</div>
  </div>
</template>

<script>
import Conductor from '@/components/Conductor'
import Chackbox from '@/components/Checkbox'
import EventBus from '@/helpers/EventBus'
import { mapActions } from 'vuex'

export default {
  name: 'services',
  layout: 'homeDefault',
  components: { Conductor, Chackbox },
  data() {
	return {
	  name: '',
	  email: '',
	  phone: '',
	  lname: '',
	  message: '',
	  nameNotValid: false,
	  emailNotValid: false,
	  lnameNotValid: false,
	  phoneNotValid: false,
	  messageNotValid: false,
	  services: {
		'Startup Scaling & Innovation': {
		  options: [
			'Digital Services',
			'Product Innovation',
			'Development',
			'Product Scaling'
			// 'Custom Applications',
		  ],
		  selected: [],
		  bgType: 'solid'
		},
		DevOps: {
		  options: [
			'Expert DevOps Consulting',
			'DevOps Support',
			'DevOps as a Service',
			''
		  ],
		  selected: [],
		  bgType: 'solid'
		},
		'Digital Commerce': {
		  options: [
			'Multi-channel',
			'Multiplatform Commerce',
			'In-Store experience',
			'Custom Solutions'
			// 'UX & Personalization'
		  ],
		  selected: [],
		  bgType: 'dotdash'
		},
		'Quality Engineering & Testing': {
		  options: [
			'Automation QA',
			'Load & Performance QA',
			'Security QA',
			'Test Advisory / Manual'
			// 'Functional Testing'
		  ],
		  selected: [],
		  bgType: 'solid'
		},
		'Application Development': {
		  options: [
			'UX/UI',
			'Mobile apps',
			'eCommerce',
			'Enterprise Apps'
			// 'ERP Systems'
		  ],
		  selected: [],
		  bgType: 'solid'
		},
		'Data & Analytics Solutions': {
		  options: [
			'Data Strategy',
			'Data Engineering',
			'Data Exploitation & AI',
			'Data-Driven Insights'
		  ],
		  selected: [],
		  bgType: 'dot'
		}
	  }
	}
  },
  created() {
	EventBus.$on('buttonClicked', this.openModal)
  },
  beforeDestroy() {
	EventBus.$off('buttonClicked', this.openModal)
  },
  mounted() {
	this.changeConductorButtonText('Order')
  },
  watch: {
	name() {
	  this.nameNotValid = false
	},
	lname() {
	  this.lnameNotValid = false
	},
	email() {
	  this.emailNotValid = false
	},
	phone() {
	  this.phoneNotValid = false
	},
	message() {
	  this.messageNotValid = false
	}
  },
  methods: {
	...mapActions('dialog', ['changeConductorButtonText']),
	openModal() {
	  this.$bvModal.show('modalService')
	},
	async submitMessage() {
	  if (!this.name) this.nameNotValid = true
	  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	  if (!this.email || !re.test(String(this.email).toLowerCase()))
		this.emailNotValid = true
	  if (!this.message) this.messageNotValid = true
	  if (!this.phone) this.phoneNotValid = true
	  if (!this.lname) this.lnameNotValid = true
	  if (
		this.nameNotValid ||
		this.emailNotValid ||
		this.messageNotValid ||
		this.phoneNotValid ||
		this.lnameNotValid
	  ) {
		return
	  }
	  const request = {
		name: this.name,
		lname: this.lname,
		email: this.email,
		phone: this.phone,
		message: this.message,
		services: [].concat(
		  ...Object.values(this.services).map(val => val.selected)
		)
	  }
	  // await this.$axios.$post('path', request)
	  console.log(request)
	  this.$bvModal.hide('modalService')
	  this.nulling()
	},
	nulling() {
	  Object.values(this.services).forEach(val => {
		this.$set(val, 'selected', [])
	  })
	  this.name = ''
	  this.lname = ''
	  this.email = ''
	  this.phone = ''
	  this.message = ''
	},
	toggle(serviceKey, option) {
	  let index
	  if ((index = this.services[serviceKey].selected.indexOf(option)) > -1) {
		let res = this.services[serviceKey].selected
		res.splice(index, 1)
		this.$set(this.services, serviceKey, {
		  ...this.services[serviceKey],
		  selected: res
		})
	  }
	  // this.services[serviceKey].selected.splice(index, 1)
	  else {
		let res = this.services[serviceKey].selected
		res.push(option)
		this.$set(this.services, serviceKey, {
		  ...this.services[serviceKey],
		  selected: res
		})
	  }
	}
  }
}
</script>

<style scoped>
.base {
  overflow: auto;
}
/* .fullWrapper {
  height: calc(100vh - 64px);
} */
.dotbg {
  background-image: url('../assets/images/Service/ketik.svg');
}

.fil0 {
  stroke: #841f3b;
  stroke-width: 0.22;
  stroke-miterlimit: 2.61313;
  fill: none;
}

li span {
  transition: all 0.2s;
}

@media screen and (max-width: 350px) {
  li span {
	font-size: 13px;
  }
}
::v-deep #modalService > .modal-dialog.modal-dialog-centered {
  padding-top: 60px;
  padding-bottom: 60px;
}
</style>
