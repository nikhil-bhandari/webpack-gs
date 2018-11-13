const path = require('path');

const adminConfig = {
  name: 'adminApp',
  entry: {
    admin: './client/admin/app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'client', 'admin'),
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
    }
  }
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
  mode: 'production',
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
    }
  }
};

module.exports = [adminConfig, appConfig];
