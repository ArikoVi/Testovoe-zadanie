
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Zilla+Slab:400,700'
      }
    ],
    script: [
      { hid: 'stripe', src: 'valid', defer: true },
      { hid: 'stripe', src: 'main.js', defer: true}
    ],
    css: [
      // модуль node.js, но с указанием пре-процессора
      { src: 'bulma', lang: 'css' },
      { src: '~assets/css/styles.css', lang: 'css' },
      { src: '~assets/css/styles.css', lang: 'css' },
      // CSS-файл в проекте
      '~assets/css/styles.css',
      '~assets/css/login.css'
    ]
  },

  loading: {color:'blue'},
  /*
  ** Global CSS
  */
  css: [
    '~assets/scss/styles.scss',
    '~assets/css/login.css',
    { src: '~assets/css/styles.css', lang: 'css' },
    { src: '~assets/css/login.css', lang: 'css' }
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extractCSS: true
  }
}
