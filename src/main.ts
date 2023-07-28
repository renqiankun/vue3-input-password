import { createApp } from 'vue'
import App from './App.vue'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
let app = createApp(App)
app.use(elementPlus)
app.mount('#app')
