import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.lib.json',
      rollupTypes: true
    })
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vue-ol-composable',
      fileName: 'vue-ol-composable'
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
