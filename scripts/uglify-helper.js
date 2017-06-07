const { Transform } = require('stream');
const UglifyJS = require('uglify-js');

class UglifyTransform extends Transform {
  constructor(options) {
    super(options);
    this.inputBuffer = [];
  }

  _transform(chunk, encoding, callback) {
    this.inputBuffer.push(chunk);
    callback();
  }

  _flush(callback) {
    const css = Buffer.concat(this.inputBuffer).toString();
    const { code } = UglifyJS.minify(css);

    this.push(Buffer.from(code));
    callback();
  }
}

module.exports = () => new UglifyTransform();
