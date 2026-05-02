/// <reference types="node" />
// @ts-check
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const removeCrossOrigin = () => ({
  name: 'remove-crossorigin-attribute',
  apply: 'build' as const,
  transformIndexHtml(html: string) {
    return html
      .replace(/\s*crossorigin\b/g, '')
      .replace(/\s*type="module"/g, ' defer')
  },
})

export default defineConfig({
  base: './',
  plugins: [react(), UnoCSS(), removeCrossOrigin()],
  build: {
    rollupOptions: {
      output: {
        format: 'iife',
      },
    },
  },
  define: {
    'import.meta': '{}',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
