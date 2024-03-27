import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path";
import dtsPlugin from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        dtsPlugin({
            clearPureImport: false,
            copyDtsFiles: true,
            include: [
                `src/library.ts`
            ]
        })
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/main.ts')
            },
            output: {
                format: 'module',
                chunkFileNames: '[name].js',
                assetFileNames: 'assets/[name][extname]'
            },
        }
    }
})
