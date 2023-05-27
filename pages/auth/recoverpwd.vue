<script>
/**
 * Recoverpwd component
 */
import { required, email } from 'vuelidate/lib/validators'
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from 'assets/js/logo-lottie.json'
import Swal from 'sweetalert2'
import { mapActions } from 'vuex'

export default {
  head() {
    return {
      title: `Recover | Estimators`
    }
  },
  components: {
    lottie
  },
  data() {
    return {
      lottieOptions: { animationData: animationData.default },
      email: '',
      loading: false
    }
  },
  methods: {
    ...mapActions('api', ['recover']),

    errormsg(msg) {
      return Swal.fire({
        position: 'center',
        icon: 'error',
        title: msg,
        showConfirmButton: false,
        timer: 2000
      })
    },
    successmsg() {
      return Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Please check your email.',
        showConfirmButton: false,
        timer: 2000
      })
    },
    async submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        try {
          this.loading = true
          const res = await this.recover(this.email)
          console.log(res)
          if (res.status === 200) {
            await this.successmsg()
            this.$router.push('/auth/login')
          } else {
          }
        } catch (error) {
          console.log(error.response)
          let msg =
            (error?.response?.data?.message && 'User not found.') ||
            'Something went wrong.'
          await this.errormsg(msg)
        } finally {
          this.loading = false
        }
      }
    }
  },
  validations: {
    email: {
      email,
      required
    }
  },
  layout: 'auth-2'
}
</script>

<template>
  <div>
    <!-- Logo -->
    <div class="auth-brand text-center text-lg-left">
      <div class="auth-logo">
        <NuxtLink :to="localePath('/')">
          <lottie
            :width="90"
            :height="90"
            :options="lottieOptions"
            class="xl:h-44 xl:w-44 lg:h-28 lg:w-28 page-logo"
          />
        </NuxtLink>
      </div>
    </div>

    <!-- title-->
    <h4 class="mt-0">Recover Password</h4>
    <p class="text-muted mb-4">
      Enter your email address and we'll send you an email with instructions to
      reset your password.
    </p>

    <!-- form -->
    <form @submit.prevent="submit">
      <div class="form-group mb-3">
        <label for="emailaddress">Email address</label>
        <input
          class="form-control"
          type="email"
          id="emailaddress"
          required
          placeholder="Enter your email"
          v-model="email"
          :class="{ hasError: $v.email.$anyError }"
        />
      </div>

      <div class="form-group mb-0 text-center">
        <button
          class="btn btn-primary waves-effect waves-light btn-block"
          type="submit"
          :disabled="loading"
        >
          Reset Password
        </button>
      </div>
    </form>
    <!-- end form-->

    <!-- Footer-->
    <footer class="footer footer-alt">
      <p class="text-muted">
        Back to
        <nuxt-link :to="localPath('/auth/login')" class="text-primary ml-1">
          <b>Log in</b>
        </nuxt-link>
      </p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.hasError {
  border-color: red !important;
}
button[disabled] {
  cursor: default;
}
</style>
