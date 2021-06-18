const {
  src,
  dest
} = require('gulp');

const timestamp = (new Date()).getTime();
const rename = require("gulp-rename");


module.exports = function renametime() {
  return  src(['build/css/*.css'])
    .pipe(rename(function (path) {
      if (path.basename === 'style.min') {
        path.basename += '-' + timestamp;
      }
    }))
    .pipe(dest(function (file) {
      return file.base;
    }));


}



