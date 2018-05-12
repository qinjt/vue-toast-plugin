const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'vue-toast-plugin.js',
    libraryTarget: "umd",
    library: "vueToastPlugin"
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /node_modules/,
        options: {
          loaders: {
            scss: 'style-loader!css-loader!postcss-loader!sass-loader'
          },
          extractCSS: true
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
    ]
  },
  plugins: []
}