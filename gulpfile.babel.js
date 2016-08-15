import gulp from 'gulp'
import babel from 'gulp-babel'

const paths = {
  src: 'src',
  dest: 'lib'
}

gulp.task('scripts', () => {
  return gulp.src(`${paths.src}/**/*.js`)
    .pipe(babel())
    .pipe(gulp.dest(paths.dest))
})

gulp.task('copy', () => {
  return gulp.src(`${paths.src}/assets/**/*.*`)
    .pipe(gulp.dest(`${paths.dest}/assets`))
})

gulp.task('watch', ['build'], () => {
  gulp.watch(`${paths.src}/**/*.js`, ['scripts'])
  gulp.watch(`${paths.src}/assets/**/*.*`, ['copy'])
})

gulp.task('build', ['scripts', 'copy'])
