// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
    faGithub,
    faTwitter,
    faLinkedin,
    faHtml5,
    faCss3Alt,
    faJsSquare,
    faReact,
    faVuejs,
    faCodepen,
    faNode,
    faBootstrap,
    faGit,
    faSass,
    faGulp,
  } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

import '~/assets/sass/main.scss'

import DefaultLayout from '~/layouts/Default.vue'

config.autoAddCss = false;
library.add(
  faGithub,
  faTwitter,
  faLinkedin,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faVuejs,
  faCodepen,
  faNode,
  faBootstrap,
  faGit,
  faSass,
  faGulp
)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.component('font-awesome', FontAwesomeIcon)

  if (isClient) { 
    const VueScrollTo = require("vue-scrollto")
    const Scrollspy = require("vue2-scrollspy")

    Vue.use(VueScrollTo, {
      duration: 500,
      easing: "ease",
    })
  
    Vue.use(Scrollspy)
}

  head.meta.push({
    name: 'keywords',
    content: 'Gridsome,Vue,CSS,JavaScript,HTML,CSS,Vue.js,VueJS'
  })

  head.meta.push({
    name: 'author',
    content: 'Łukasz Zapolski'
  })
}
