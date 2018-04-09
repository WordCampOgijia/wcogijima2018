'use strict';

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sassGlob     = require('gulp-sass-glob');
var postcss      = require('gulp-postcss');
var cssnano      = require('cssnano');
var rename       = require('gulp-rename');
var autoprefixer = require('autoprefixer');
var browserSync  = require('browser-sync').create();
var plumber      = require('gulp-plumber');
var imagemin     = require("gulp-imagemin");

var dir = {
  src: {
    css: 'scss',
    img: 'images'
  },
  dist: {
    css: 'css',
    img: 'images'
  }
}

/*----------------------------
 開発用タスク
----------------------------*/
// ローカルサーバー起動
gulp.task('server', function() {
  browserSync.init({
    files: ['./'],
    proxy: 'http://localhost/',
    watchOptions: {
      ignoreInitial: true,
      ignored: [dir.src.css + '/**/*.scss', './.git/']
    }
  });
});

// SASSコンパイル・プリフィクス追加・並び替え
gulp.task('sass', function() {
  return gulp.src(dir.src.css + '/*.scss')
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 4 versions', 'ie >= 9', 'iOS >= 9', 'Android >= 4.4'],
        cascade: false
      })
    ]))
    .pipe(gulp.dest(dir.dist.css))
    .pipe(postcss([
      cssnano({
        'zindex': false
      })
    ]))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(dir.dist.css))
});

// 画像圧縮
gulp.task("minimg", function() {
  return gulp.src([dir.src.img + '/*.jpg', dir.src.img + '/*.png'])
    .pipe(imagemin())
    .pipe(gulp.dest(dir.dist.img));
});

/*----------------------------
 監視用タスク
----------------------------*/
gulp.task('watch', function() {
  gulp.watch(dir.src.css + '/**/*.scss', ['sass']);
});

/*----------------------------
 タスク開始
----------------------------*/
gulp.task('default', ['server', 'watch']);
