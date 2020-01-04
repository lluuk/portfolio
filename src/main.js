// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import VueScrollTo from 'vue-scrollto'
import Scrollspy from 'vue2-scrollspy'

import '~/assets/sass/main.scss'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(Scrollspy)

  head.meta.push({
    name: 'keywords',
    content: 'Gridsome,Vue,CSS,JavaScript,HTML,CSS,Vue.js,VueJS'
  })

  head.meta.push({
    name: 'author',
    content: 'Łukasz Zapolski'
  })
}
