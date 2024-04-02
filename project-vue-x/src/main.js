import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

import ScriptX from 'vue-scriptx'
app.use(ScriptX)

import Ads from 'vue-google-adsense'
app.use(Ads.Adsense)
app.use(Ads.InArticleAdsense)
app.use(Ads.InFeedAdsense)

app.mount('#app')
