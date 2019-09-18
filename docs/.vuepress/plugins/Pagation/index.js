const { path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  name: '@vuepress-reco/plugin-pagation',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ]
})