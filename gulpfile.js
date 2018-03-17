const gulp = require('gulp');
const ejs = require('gulp-ejs');
const sass = require('gulp-sass');
const ejsData = require('./src/data');

const distDir = './dist';

// SASS Styles
gulp.task('scss', () => {
  return gulp.src('./src/scss/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(distDir));
});

gulp.task('scss:dev', ['scss'], () => {
  gulp.watch('./src/**/*.scss', ['scss']);
});

// EJS Templates
gulp.task('ejs', () => {
  gulp.src('./src/ejs/*.ejs')
    .pipe(ejs(ejsData, {}, {
      ext: '.html'
    }))
    .pipe(gulp.dest(distDir));
});

gulp.task('ejs:dev', ['ejs'], () => {
  gulp.watch([
    './src/**/*.ejs',
    './src/data.js',
  ], ['ejs']);
});

// Image assets
gulp.task('assets', () => {
  gulp.src('./src/assets/**/*', {
    base: 'src'
  }).pipe(gulp.dest(distDir));
});

gulp.task('assets:dev', ['assets'], () => {
  gulp.watch('./src/assets/**/*', ['assets']);
});


// Full Tasks
gulp.task('dev', ['scss:dev', 'ejs:dev', 'assets:dev']);
gulp.task('build', ['scss', 'ejs', 'assets']);
