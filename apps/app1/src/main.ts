import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { initKeycloak } from '@repo/utils'

initKeycloak({
  url: "http://192.168.1.70:8280",
  realm: "solution-x",
  clientId: "keycloak-test",
}).then(keycloak => {
  console.log(keycloak)
})



createApp(App).mount('#app')
