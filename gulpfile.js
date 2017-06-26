var gulp        = require('gulp');
var babel       = require('gulp-babel');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });

    gulp.watch("app/js/*.js", ['js']);
    gulp.watch("app/**/*").on('change', browserSync.reload);
});

gulp.task('js', function() {
  console.log("CUSTOM: Running gulp-concat");
  return gulp.src('./app/js/*.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./app/dist/'));
});

gulp.task('sass', function() {
  return gulp.src("app/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
})

gulp.task('default', ['js', 'serve']);