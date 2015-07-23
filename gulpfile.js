var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer');
    
gulp.task('less', function() {
      gulp.src('./less/custom.less')
      .pipe(less())
      .pipe(autoprefixer('last 10 versions', 'ie9'))
      .pipe(gulp.dest('./css'))
      .pipe(livereload());
});

gulp.task('watch', function() {
   livereload.listen();
   gulp.watch('./less/*.less', ['less']);   
});

gulp.task('default', ['watch']);
