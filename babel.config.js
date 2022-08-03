const plugins = []
// if (process.env.NODE_ENV === 'production') {
//   plugins.push('transform-remove-console')
// }
// plugins.push([
//   'import',
//   {
//     libraryName: 'vant',
//     libraryDirectory: 'es',
//     style: true
//   },
//   'vant'
// ])
module.exports = {
  presets: [['@vue/app']],
  plugins: plugins
}
