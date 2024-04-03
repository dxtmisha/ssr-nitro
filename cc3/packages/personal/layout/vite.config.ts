import { resolve } from 'path'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import uiVitePlugin from 'ui/vite-plugin-vue-ui'

import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import cssnanoPlugin from 'cssnano'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    uiVitePlugin({
      importComponents: true,
      style: 'c2',
      icon: false,
      flag: false
    })
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index-production.html')
      },
      external: [],
    }
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        tailwindcss,
        cssnanoPlugin({
          preset: 'default'
        })
      ]
    }
  }
})
