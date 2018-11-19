const express = require('express');

const app = express();
const PORT = 6090;

app.use('/admin', express.static('client/admin'));
app.use('/', express.static('client/app'));

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});

exports = module.exports = app;
