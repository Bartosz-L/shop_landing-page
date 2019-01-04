
const gulp = require('gulp');
const gulpSass = require('gulp-sass');

const paths = {
  src: './source/style.scss',
  dest: './build'
};

gulp.task('buildcss', function() {
  return gulp.src(paths.src)
      .pipe(gulpSass())
      .pipe(gulp.dest(paths.dest));
});

gulp.task('watch', function() {
  gulp.watch('source/**/*.scss', gulp.series('buildcss'));
});