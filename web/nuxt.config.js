
require('dotenv').config({ path: '/config/app.conf'})

module.exports = {
  server: {
    port: process.env.web_port, // default: 3000
    host: process.env.web_host // default: localhost
  },
  srcDir: 'src/',
  build: {
  },

   head: {
    title: '',
    meta: [],
    link: [
      { rel:"shortcut icon", href:"/img/favicon.png"}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'rgba(50,191,196,0.95)'
  },
  /*
  ** Global CSS
  */
  css: [

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/dotenv', { path: '/config/', filename: 'app.conf' }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
       '@nuxtjs/axios',
       '@nuxtjs/proxy'

  ],
        axios:{
        credentials:true,
        proxyHeaders:true,
        proxy: true
    },
    serverMiddleware: ['~/api/index.js']

}
