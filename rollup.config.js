export default {
  entry: './src/index.ts',
  plugins: [
    require('rollup-plugin-typescript')({
      typescript: require('typescript')
    }),
    require('rollup-plugin-uglify')()
  ],
  format: 'umd',
  moduleName: 'DeepDeepInside',
  dest: './lib/index.js'
}
