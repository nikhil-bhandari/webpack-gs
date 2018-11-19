const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const apps = [{
  name: 'app',
  path: 'client/app'
}, {
  name: 'adminApp',
  path: 'client/admin'
}];

const config = apps.map((app) => {
  return {
    name: app.name,
    entry: {
      admin: `./${app.path}/app.js`,
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(app.path),
    },
    devtool: 'eval-source-map',
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
        template: `${app.path}/index.template.html`
      })
    ]
  };
});

module.exports = config;
