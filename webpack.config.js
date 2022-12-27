const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    // utilizando o hash, para que seja gerado um ao lado do nome do arquivo, a cada novo bundle
    // o novo hash sera gerado, sempre que uma alteracao no codigo do arquivo for realizada
    filename: 'index[hash].js',
  },
  mode: 'development',
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new CleanWebpackPlugin()
  ],

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/, // excluindo a execucao do babel loader nos arquivos js do node_modules
      use: 'babel-loader'
    }]
  },

  // setando uma porta para o servidor
  devServer: {
    port: 6769
  }
}
