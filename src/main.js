import { createApp } from 'vue'
import * as Vue from 'vue' // eslint-disable-line no-unused-vars
import axios from 'axios' // eslint-disable-line no-unused-vars
import VueAxios from 'vue-axios' // eslint-disable-line no-unused-vars

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
