// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/project-nuxt/'
  },
  vite: {
    build: {
      rollupOptions: {
        external: ['ui', 'ui/C2Button'],
        output: {
          globals: {
            ui: '/ds/'
          }
        }
      }
    }
  }
})
