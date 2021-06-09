const {
	watch,
	parallel,
	series
} = require('gulp');

module.exports = function watching() {
	watch('src/**/*.html', parallel('html'));
	watch('src/**/*.php', parallel('php'));
	watch('src/**/*.scss', parallel('style'));
	watch('src/**/*.js', parallel('dev_js'));
	watch('src/**/*.json', parallel('html'));
	watch('src/assets/img/**/*.+(png|jpg|jpeg|gif|svg|ico)', parallel('rastr'));
	watch('build/img/**/*.+(png|jpg|jpeg)', parallel('webp'));
	watch('src/assets/svg/css/**/*.svg', series('svg_css', 'style'));
	watch('src/assets/svg/sprite/**/*.svg', series('svg_sprite', 'rastr'));
	watch('src/assets/fonts/**/*.ttf', series('ttf', 'fonts'));
}