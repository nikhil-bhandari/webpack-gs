const path = require('path');

const adminConfig = {
  name: 'adminApp',
  entry: {
    admin:  './client/admin/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'client' ,'admin')
  },
  mode: 'production'
};

const appConfig = {
  name: 'publicApp',
  entry: {
    app: './client/app/app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'client' ,'app')
  },
  mode: 'production'
};

module.exports = [adminConfig, appConfig];
