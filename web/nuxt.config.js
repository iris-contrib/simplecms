module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  vender: [
    'element-ui'
  ],
  babel: {
    'plugins': [['component', [
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      },
      'transform-async-to-generator',
      'transform-runtime'
    ]]],
    comments: true
  },
  plugins: [
    { src: '~plugins/element-ui', ssr: true },
    { src: '~plugins/mavon-editor', ssr: false },
    { src: '~plugins/vue-holderjs', ssr: false },
    { src: '~plugins/mockjs', ssr: true }
  ],
  css: [
    // 有些说全部引用的时候需要用到,在我使用过程中不管全局引用还是部分引用都是要配置，否则样式不生效，可能哪里还没配置好，但是写了一定会有效；
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
