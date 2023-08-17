import './assets/main.css'

import {
    createApp
} from 'vue'
import {
    createPinia
} from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import components from '@/components/UI'
import App from './App.vue'
import router from './router'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

components.forEach(component => {
    app.component(component.name, component);
})

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')