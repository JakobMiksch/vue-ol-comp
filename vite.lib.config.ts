import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { URL, fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.lib.json',
      rollupTypes: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vue-ol-comp',
      fileName: 'vue-ol-comp'
    },
    emptyOutDir: true,
    rollupOptions: {
      external: ['vue', 'vue-router', 'ol', 'ol/Map', 'ol/View', 'ol/extent', 'ol/layer/Base'],
      output: {
        globals: {
          vue: 'Vue',
          ol: 'ol',
          'vue-router': 'vue-router'
        }
      }
    }
  }
})
