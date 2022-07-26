const { defineConfig } = require('@vue/cli-service')

const NODE_ENV = process.env.NODE_ENV === 'development'
    ? 'development'
    : 'production';

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        additionalData: `@import "@/style/variables.scss";`
      }
    }
  }
})
