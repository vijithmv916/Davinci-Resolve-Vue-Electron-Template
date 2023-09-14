const _require = id => require(require.resolve(id, { paths: [require.main.path] }))

const path = _require('path')
const HtmlPlugin = _require('html-webpack-plugin')
const CopyPlugin = _require('copy-webpack-plugin')
const { VueLoaderPlugin } = _require('vue-loader')
const UnoCSS = require('@unocss/webpack').default;

module.exports = {
  resolve: {
    extensions: ['.js', '.vue'],

    alias: { // src/renderer is vue root
      '~': path.resolve(__dirname, 'src/renderer/src'),
      'assets': path.resolve(__dirname, 'src/renderer/src/assets')
    }
  },

  entry: {
    vue: path.resolve(__dirname, 'src/renderer/src/vue.js')
  },


  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: 'file-loader'
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: './src/renderer/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'resources' }
      ]
    }),
    new VueLoaderPlugin(),
    new UnoCSS()
  ],

  // devServer: {
  //   host: 'localhost',
  //   port: 3000,
  //   hot: true
  // }
}
