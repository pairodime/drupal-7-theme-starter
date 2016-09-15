 //get gulp node package
var  gulp           = require('gulp'),
    autoprefixer    = require('gulp-autoprefixer'),
    sass            = require('gulp-sass'),
    babel           = require("gulp-babel"),
    concat          = require('gulp-concat');

gulp.task('js', function() {
    return gulp.src('js/*.js')
    .pipe(gulp.dest('js'));
});

gulp.task('css', function () {
    gulp.src('css/style.css')
    .pipe(gulp.dest('css/min'));
});

gulp.task('prefix', function () {
    return gulp.src('css/style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'));
});

gulp.task('sass', function () {
  gulp.src('css/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'));
});

gulp.task("babel", function () {
  return gulp.src("babel/*.js")
    .pipe(babel())
    .pipe(concat('script.js'))
    .pipe(gulp.dest("js"));
});

//set default task
gulp.task('default', function(){

});

// Auto Watch
gulp.task('watch', ['sass', 'babel'], function () {
    gulp.watch('css/scss/*.scss', ['sass']);
    gulp.watch('babel/*.js', ['babel']);

});
