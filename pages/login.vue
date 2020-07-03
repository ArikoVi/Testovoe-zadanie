<template>
  <section>
    <div v-if="$route.query.message" class="alert alert-danger mb-3">
      Need login first
    </div>
    <form @submit.prevent="onSubmit" class="login100-form validate-form">
      <div class="form-group wrap-login100">
        <span class="login100-form-title p-b-26">
                    Welcome
                </span>
        <div class="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
          <input class="input100" type="text" name="email" placeholder="Enter email">
          <span class="focus-input100" ></span>
        </div>
        <div class="wrap-input100 validate-input password" data-validate="Enter password">
          <input class="input100" type="password" id="password-input" name="password" placeholder="Enter password">
          <span class="focus-input100"></span>
          <a href="#" class="password-control" onclick="return show_hide_password(this);"></a>
        </div>
        <div class="container-login100-form-btn">
          <div class="wrap-login100-form-btn">
            <button class="login100-form-btn stylistics_knopkam maiden " type="submit" onclick="form.reset()">
              Login
            </button>
          </div>
        </div>
        <div class="text-center p-t-115">
                    <span class="txt1">
                        Don’t have an account?
                    </span>
          <a class="txt2" href="#">
            Sign Up
          </a>
        </div>
      </div>

      <p>
        <nuxt-link to="/">To home page</nuxt-link>
      </p>

    </form>
  </section>
</template>

<script>

  export default {
  layout: 'empty',
  methods: {
    onSubmit() {
      this.$store.dispatch('login')
      this.$router.push('/')
    }
  },
  head() {
    return {
      title: 'valid',
      script: [
        { hid: 'stripe', src: 'valid.js', defer: true },
        { hid: 'stripe', src: 'main.js', defer: true}
      ],
      css: [
        'hover.css/css/hover-min.css',
        // модуль node.js, но с указанием пре-процессора
        { src: 'bulma', lang: 'css' },
        // CSS-файл в проекте
        '~assets/css/login.css'
      ]
    }
  }
}
</script>

