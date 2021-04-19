const {src, dest, parallel, series, watch} = require('gulp');

const del = require('del');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const fileInclude = require('gulp-file-include');
const rev = require('gulp-rev');
const revRewrite = require('gulp-rev-rewrite');
const revDel = require('gulp-rev-delete-original');
const listing = require('gulp-listing');
const { readFileSync } = require('fs');

const clean = () => {
  return del(['app/*'])
}

const styles = () => {
  src('./src/sass/**/*.sass')
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(dest('./app/css/'))
    .pipe(browserSync.stream());
  return src('./src/sass/**/*.sass')
    .pipe(sass())
    .pipe(concat('main.min.css'))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS({ level: 2 }))
    .pipe(dest('./app/css/'))
    .pipe(browserSync.stream());
};

const scripts = () => {
  return src([
    './src/js/vendor/jquery-3.6.0.min.js',
    './src/js/vendor/jquery.fancybox.min.js',
    // './src/js/vendor/slick.min.js',
    './src/js/vendor/swiper-bundle.min.js',
    './src/js/vendor/jquery.mousewheel.min.js',
    // './src/js/vendor/jquery.inputmask.min.js',
    // './src/js/vendor/jquery.validate.min.js',
    './src/js/common.js'
  ])
    .pipe(concat('main.js'))
    .pipe(dest('./app/js/'))
    .pipe(browserSync.stream());
}

const scriptsMin = () => {
  return src('./app/js/main.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('./app/js/'))
    .pipe(browserSync.stream());
}

const htmlInclude = () => {
  return src(['./src/*.html'])
    .pipe(fileInclude({
      prefix: '@',
      basepath: '@file'
    }))
    .pipe(dest('./app'))
    .pipe(browserSync.stream());
}

const resources = () => {
  return src('./src/resources/**')
    .pipe(dest('./app'))
}

const images = () => {
  return src('./src/img/**/*')
    .pipe(dest('./app/img'))
};

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: "./app"
    },
  });

  watch('./src/sass/**/*.sass', styles);
  watch('./src/js/**/*.js', scripts);
  watch('./app/js/main.js', scriptsMin);
  watch('./src/partials/*.html', htmlInclude);
  watch('./src/*.html', htmlInclude);
  watch('./src/resources/**', resources);
  watch('./src/img/**/*', images);
}

const cache = () => {
  return src('app/**/*.{css,js,svg,png,jpg,jpeg,woff2}', {
    base: 'app'})
    .pipe(rev())
    .pipe(dest('app'))
    .pipe(revDel())
    .pipe(rev.manifest('rev.json'))
    .pipe(dest('app'));
};

const rewrite = () => {
  const manifest = readFileSync('app/rev.json');

  return src('app/**/*.html')
    .pipe(revRewrite({
      manifest
    }))
    .pipe(dest('app'));
}

const pageLink = () => {
  return src('./src/*.html')
    .pipe(listing('page-list.html'))
    .pipe(dest('app'));
}

exports.default = series(clean, htmlInclude, scripts, scriptsMin, styles, resources, images, watchFiles);

exports.build = series(clean, htmlInclude, scripts, scriptsMin, styles, resources, images, pageLink);

exports.cache = series(cache, rewrite);