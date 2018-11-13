const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const configs = require('../webpack.config.js');

const PORT = 6090;

configs.forEach((config) => {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));
});

app.use('/admin', express.static('client/admin'));
app.use('/', express.static('client/app'));

app.use('/api', (req, res) => {
  res.json({
    ok: true
  });
});

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
