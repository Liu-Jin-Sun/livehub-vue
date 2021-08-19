// import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-ui/lib/theme-chalk/index.css'

// import Drop from './Drop.vue'

const { createApp } = require('vue')
const ElementPlus = require('element-plus')
const Drop = require('./Drop.vue')
require('element-ui/lib/theme-chalk/index.css')

const app = createApp(Drop)
app.use(ElementPlus)
app.mount('#app')
