<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from 'assets/js/logo-lottie.json'
import { required, email, minLength } from 'vuelidate/lib/validators'
import Swal from 'sweetalert2'
import { mapActions, mapGetters } from 'vuex'

/**
 * Login-2 component
 */
export default {
  head() {
    return {
      title: `Sign In | ESTIMATORS`
    }
  },
  data() {
    return {
      lottieOptions: { animationData: animationData.default },
      passowrdType: 'password',
      remember: true,
      email: '',
      password: '',
      loading: false
    }
  },
  components: {
    lottie
  },
  computed: {
    // ...mapGetters('api', ['checkUserRole'])
  },
  methods: {
    ...mapActions('api', ['login']),
    errormsg(msg) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: msg,
        showConfirmButton: false,
        timer: 2000
      })
    },
    async submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        // this.$auth.loginWith('local', {
        //   data: {
        //     email: this.email,
        //     password: this.password
        //   }
        // })
        try {
          this.loading = true
          const res = await this.login({
            email: this.email,
            password: this.password,
            remember: this.remember
          })

          //fetch profile
          console.log(res, 'res', this.getUserRole)
          // if (this.checkUserRole('admin')) {
          this.$router.push('/dashboard')
          // } else {
          //   this.$router.push('/contacts/profile')
          // }
        } catch (error) {
          let msg = 'Something went wrong.'
          if (
            error?.response?.data?.error_description.startsWith(
              'User not found'
            )
          )
            msg = 'User not found.'
          this.errormsg(msg)
        }
        this.loading = false
      }
    }
  },
  validations: {
    email: {
      email,
      required
    },
    password: {
      minLength: minLength(3),
      required
    }
  },
  layout: 'auth-2'
}
</script>

<template>
  <div>
    <!-- Logo -->
    <div class="auth-brand text-center text-lg-left mb-2">
      <div class="auth-logo flex justify-center">
        <NuxtLink :to="localePath('/')">
          <lottie
            :width="90"
            :height="90"
            :options="lottieOptions"
            class="xl:h-44 xl:w-44 lg:h-28 lg:w-28 page-logo"
          />
        </NuxtLink>

        <!-- <nuxt-link to="/" class="logo logo-light text-center">
          <span class="logo-lg">
            <img src="~/assets/images/logo-light.png" alt height="22" />
          </span>
        </nuxt-link> -->
      </div>
    </div>

    <!-- title-->
    <h4 class="mt-0">Sign In</h4>
    <p class="text-muted mb-4">
      Enter your email address and password to access admin panel.
    </p>

    <!-- form -->
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="emailaddress">Email address</label>
        <input
          class="form-control"
          type="email"
          id="emailaddress"
          placeholder="Enter your email"
          v-model="$v.email.$model"
          :class="{ hasError: $v.email.$anyError }"
        />
      </div>
      <div class="form-group">
        <NuxtLink :to="localePath('/auth/recoverpwd')" class="text-muted float-right">
          <small>Forgot your password?</small>
        </NuxtLink>
        <label for="password">Password</label>
        <div class="input-group input-group-merge">
          <input
            :type="passowrdType"
            id="password"
            class="form-control"
            placeholder="Enter your password"
            v-model="$v.password.$model"
            :class="{ hasError: $v.password.$anyError }"
          />
          <div
            class="input-group-append"
            data-password="false"
            @mousedown.left="passowrdType = 'text'"
            @mouseup.left="passowrdType = 'password'"
          >
            <div class="input-group-text">
              <span class="password-eye"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="form-group mb-3">
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            v-model="remember"
            class="custom-control-input"
            id="checkbox-signin"
          />
          <label class="custom-control-label" for="checkbox-signin"
            >Remember me</label
          >
        </div>
      </div>
      <div class="form-group mb-0 text-center">
        <button
          class="btn btn-primary btn-block"
          type="submit"
          :disabled="loading"
        >
          Log In
        </button>
      </div>
    </form>
    <!-- end form-->
    <!-- Footer-->
    <footer class="footer footer-alt">
      <p class="text-muted">
        Don't have an account?
        <NuxtLink :to="localePath('/auth/register')" class="text-primary ml-1">
          <b>Sign Up</b>
        </NuxtLink>
      </p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.hasError {
  border-color: red !important;
}
.input-group-text {
  padding: 0.4em 0.75em;
  line-height: 0.5;
  cursor: pointer;
}
</style>
