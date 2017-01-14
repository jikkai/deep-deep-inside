export default {
  entry: './src/index.js',
  plugins: [
    require('rollup-plugin-babel')({
      exclude: 'node_modules/**'
    }),
    require('rollup-plugin-uglify')()
  ],
  format: 'umd',
  moduleName: 'DeepDeepInside',
  dest: './lib/index.js'
}
