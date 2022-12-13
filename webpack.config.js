const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode:'development',
    entry:{
        index:'./src/index.js',
    },
    devServer: {
        static: './dist',
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'index file',
            template: './src/index.html',
        }),
      ],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
      },
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
}