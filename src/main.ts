/*
 * @Author: fastfan
 * @Date: 2025-02-06 22:15:46
 * @LastEditors: fastfan
 * @LastEditTime: 2025-02-09 16:52:20
 * @Description: your description
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router' // ++
import pinia from '@/store' // ++
import './styles/index.scss'
const app = createApp(App)
app.use(router) // ++
app.use(pinia) // ++
app.mount('#app')
