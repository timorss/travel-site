var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars'); // set vars
var nested = require('postcss-nested');// css in css
var cssImport = require('postcss-import');//import css to another file
var mixins= require('postcss-mixins');

gulp.task('styles',function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
  .on('error', function(errorInfo){
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles'));
});