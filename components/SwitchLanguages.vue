<template>
	<div class="lang__switcher relative">
		<span class="current__lang" @click="toggle">
			<img :src="require(`~/assets/images/AppHeaderImg/${$i18n.locale}.png`)" :alt="$i18n.locale">
		</span>

		<transition name="popIn">
			<div class="other__langs absolute" v-if="isOpen">
				<div class="link__wrapper" @click="toggle">
					<nuxt-link
						v-for="locale in availableLocales"
						:key="locale.code"
						:to="switchLocalePath(locale.code)"
						class="flex items-center"
					>
						<img class="country__flag" :src="require(`~/assets/images/AppHeaderImg/${locale.code}.png`)" :alt="locale.name">
						<span class="country__name">{{ locale.name }}</span>
					</nuxt-link>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'SwitchLanguages',
	data() {
		return {
			isOpen: false,
		}
	},
	computed: {
		availableLocales () {
			return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
		}
	},
	methods: {
		toggle() {
			this.isOpen = !this.isOpen
		}
	},
	mounted() {
		document.body.addEventListener('click', (e) => {

			if ( this.isOpen ) {
				if ( !document.querySelector('.lang__switcher').contains(e.target) ) {
					this.isOpen = false;
				}
			}

		});
	}
}
</script>

<style lang="scss" scoped>
.popIn-enter-active, .popIn-leave-active {
	transition: opacity .2s, transform .2s;
}
.popIn-enter, .popIn-leave-active {
	transform: translateY(-10px);
	opacity: 0;
}

.lang__switcher {
	position: relative;

	.current__lang {
		cursor: pointer;
	}

	.other__langs {
		background: #fff;
		right: -10px;
		top: 41px;
		width: max-content;
		min-width: 110px;
		box-shadow: 0px 0px 17px 6px rgba(0,0,0,.1);
		border-radius: 4px;
		z-index: -1;

		&::after {
			content: '';
			position: absolute;
			top: -9px;
			left: 74%;
			width: 16px;
			height: 16px;
			background: #fff;
			transform: rotate(45deg);
			border-left: 1px solid #ccc;
			border-top: 1px solid #ccc;
			z-index: -1;
		}

		a {
			padding: 6px 10px;
			font-size: 16px;
			background: #fff;
			color: #016189;
			transition: background .2s ease;

			&:hover {
				background: #eee;
			}

			img {
				display: block;
				margin-right: 6px;
			}

			span {
				display: block;
			}

		}
	}
}
</style>