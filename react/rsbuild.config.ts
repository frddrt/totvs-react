import { defineConfig } from "@rsbuild/core"
import { pluginReact } from "@rsbuild/plugin-react"
import { pluginSass } from "@rsbuild/plugin-sass"

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSass({
      sassLoaderOptions: {
        sassOptions: {
          quietDeps: true,
        },
      },
    })
  ],
server: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000/rest/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  output: {
    distPath: {
      root: 'build',
    },
    cleanDistPath: true,
  },
  html: {
    template: './public/index.html',
  },
})
