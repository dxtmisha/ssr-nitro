import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue()
    ],
    build: {
        rollupOptions: {
            external: ['ui', 'ui/C2Button'],
            output: {
                globals: {
                    ui: '/ds/'
                }
            }
        }
    },
    base: '/project-a/'
})
