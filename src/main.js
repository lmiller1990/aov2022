import { createApp } from 'vue'
import App from './App.vue'
import './base.css'
import { christmas } from './christmas'

const app = createApp(App)

app.directive('christmas', christmas)

app.mount('#app')
