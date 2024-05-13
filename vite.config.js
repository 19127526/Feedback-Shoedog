import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dynamicImport from 'vite-plugin-dynamic-import'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    plugins: [
      react({
        babel: {
          plugins: ['babel-plugin-macros'],
        },
      }),
      dynamicImport(),
      svgr({
        svgrOptions: {
          // svgr options
        },
      }),
    ],
    assetsInclude: ['**/*.md'],
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        '@/modules': path.join(__dirname, 'src/modules'),
      },
    },
    server: {
      host: process.env.VITE_HOST,
      port: Number(process.env.VITE_POST),
    },
    build: {
      outDir: 'build',
    },
  })
}
