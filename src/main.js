import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAnglesDown, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

Vue.use(VueCompositionAPI)

library.add(faAnglesDown, faAnglesRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const app = createApp({
  router,
  render: () => h(App)
})

app.mount('#app')
