// http://lesscss.org/#using-less-usage-in-code
// http://cssnano.co/usage/#javascript
// https://www.npmjs.com/package/es6-promisify

const fs = require('fs');
const { join } = require('path');
const promisify = require('es6-promisify');
const less = require('less');
const { process:minifycss } = require('cssnano');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const render = promisify(less.render.bind(less));

const source = join(__dirname, '../src/main.less');
const target = join(__dirname, '../dist/main.css');

readFile(source)
  .then(file => render(file.toString()))
  .then(({css}) => minifycss(css))
  .then(({css}) => writeFile(target, css))
  .catch(error => console.log(error));
