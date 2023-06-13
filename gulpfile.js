const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');

//compile, prefix, and min scss
function compilescss() {
    return src('assets/scss/*.scss') // change to your source directory
      .pipe(sass())
      .pipe(prefix('last 2 versions'))
      .pipe(minify())
      .pipe(dest('dist/css')) // change to your final/public directory
  };
  function jsmin(){
    return src('*.js') // change to your source directory
      .pipe(terser())
      .pipe(dest('dist/js')); // change to your final/public directory
  }
  function watchTask(){
    watch('assets/scss/*.scss',compilescss);
    watch('assets/*.js', jsmin);
  }
exports.default= series(
    compilescss,
    jsmin,
    watchTask
);
