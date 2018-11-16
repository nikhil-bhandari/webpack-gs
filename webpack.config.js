const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const adminConfig = {
  name: 'adminApp',
  entry: {
    admin: './client/admin/app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'client', 'admin'),
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: 'client/admin',
    port: 6091
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'index.html',
      template: 'client/app/index.template.html'
    })
  ]
};

const appConfig = {
  name: 'publicApp',
  entry: {
    app: './client/app/app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'client', 'app')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: 'client/app',
    port: 6091
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'index.html',
      template: 'client/app/index.template.html'
    })
  ]
};

module.exports = [adminConfig, appConfig];
