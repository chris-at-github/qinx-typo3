// include gulp
var gulp = require('gulp');

// include error handling plugins
var plumber = require('gulp-plumber');

// include imagemin plugins
var changed		= require('gulp-changed');
var imagemin	= require('gulp-imagemin');

// include js plugins
// var browserify	= require('gulp-browserify'); optional
var concat	= require('gulp-concat');
var strip		= require('gulp-strip-debug');
var uglify	= require('gulp-uglify');

// include css plugins
var sass		= require('gulp-sass');
var minify	= require('gulp-minify-css');

// paths for watching
var paths = {
	styles: 	['./typo3conf/ext/qxgo/Resources/Private/Scss/*.scss', './fileadmin/Resources/Private/Scss/*.scss'],
  scripts: 	[],
  images: 	'./fileadmin/Resources/Private/Images/*'
};

// minify new images
gulp.task('imagemin', function() {
	gulp.src(paths.images)
		.pipe(changed('./fileadmin/Resources/Public/Images'))
		.pipe(imagemin())
		.pipe(gulp.dest('./fileadmin/Resources/Public/Images'));
});

// JS concat, strip debugging and minify
// gulp.task('scripts', function() {
// //	gulp.src('src/js/app.js')
// //		.pipe(plumber())
// //		.pipe(browserify({
// //			insertGlobals: true
// //		}))
// //		.pipe(uglify())
// //		.pipe(gulp.dest('./js/'));

// 	gulp.src(['./src/js/*.js'])
// 		.pipe(plumber())
// 		.pipe(concat('script.js'))
// 		.pipe(stripDebug())
// 		.pipe(uglify())
// 		.pipe(gulp.dest('./js/'));
// });

// CSS concat and minify
gulp.task('styles', function() {
	gulp.src('./fileadmin/Resources/Private/Scss/*.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(minify())
		.pipe(gulp.dest('./fileadmin/Resources/Public/Css'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.images, ['imagemin']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'styles', 'imagemin']);