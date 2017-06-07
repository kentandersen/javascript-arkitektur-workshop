// https://github.com/substack/node-browserify#api-example

const { createWriteStream } = require('fs');
const { join } = require('path');
const browserify = require('browserify');
const uglifyJS = require('./uglify-helper');

const source = join(__dirname, '../src/main.js');
const target = join(__dirname, '../dist/main.js');

return browserify(source, {
  transform: [ 'babelify' ],
  debug: true
}).bundle()
// .pipe(uglifyJS())
.pipe(createWriteStream(target));
