import gulp from 'gulp';
import webpack from 'webpack';
import nodemon from 'nodemon';
import webpackConfig from  './webpack.config'

const clientPath = 'client';
const serverPath = 'server';

const startServer = () =>{
  nodemon(`-w ${serverPath} ${serverPath}`);
};

const webpackdev = () =>{
  return new Promise(resolve => webpack(webpackConfig, (err, stats) => {

    if (err) console.log('Webpack', err);

    console.log(stats.toString());

    resolve()
  }));
};

export default gulp.parallel(webpackdev, startServer)
