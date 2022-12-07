const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src'),
    },
    output: {
        filename: '[name][contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

optimization: {

    runtimeChunk: 'single',

  },
  devServer: {
    static: {
        directory: path.resolve(__dirname, 'src')
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
 module: {
    rules: [
        {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        },
        {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        },
    ],
},
devtool: 'inline-source-map',
plugins: [
    
        new HtmlWebpackPlugin({
          title: 'To Do Lists',
          filename: 'index.html',
          template: 'src/index.html'
        })
      
],

};