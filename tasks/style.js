const {
	src,
	dest
} = require('gulp');
const sass = require('gulp-dart-sass');
const bulk = require('gulp-sass-bulk-importer');
const prefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');
const cleancss = require('gulp-clean');
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const bs = require('browser-sync');

const timestamp = (new Date()).getTime();
const rename = require("gulp-rename");


module.exports = function style() {
				src('build/css')
					.pipe(cleancss())
	return src('src/scss/**/*.scss')
		.pipe(map.init())
		.pipe(bulk())
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(prefixer({
			overrideBrowserslist: ['last 8 versions'],
			browsers: [
				'Android >= 4',
				'Chrome >= 20',
				'Firefox >= 24',
				'Explorer >= 11',
				'iOS >= 6',
				'Opera >= 12',
				'Safari >= 6',
			],
		}))
		.pipe(clean({
			level: 2
		}))
		.pipe(concat('style.min.css'))
		.pipe(map.write('../sourcemaps/'))
		.pipe(dest('build/css/'))

			.pipe(rename(function (path) {
				if (path.basename === 'style.min') {
					path.basename += '-' + timestamp;
				}
			}))
		.pipe(dest(function (file) {
			return file.base;
		}))

		.pipe(bs.stream())
}