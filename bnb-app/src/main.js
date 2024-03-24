/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

export default createVuetify({
    theme: {
      defaultTheme: 'light'
    }
  })

import router from './router'

const app = createApp(App).use(router)


registerPlugins(app)

app.mount('#app')
