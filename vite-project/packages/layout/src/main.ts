import {createApp} from 'vue'
import './style.css'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

createApp(AppHeader).mount('#app-header')
createApp(AppFooter).mount('#app-footer')
