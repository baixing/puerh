var gulp = require('gulp')
var uglify = require('gulp-uglify')
var minify = require('gulp-minify-css')
var rename = require('gulp-rename')
var del = require('del')
var release = require('gulp-gh-pages')

var DEST = 'dist'
var SRC_SCRIPTS = 'src/js/*.js'
var SRC_STYLES = 'src/css/*.css'

gulp.task('scripts', buildScripts)
gulp.task('styles', buildStyles)
gulp.task('build', gulp.parallel('scripts', 'styles'))

gulp.task('clean', cleanDest)
gulp.task('cleanbuild', gulp.series('clean', 'build'))

gulp.task('release', release)

gulp.task('default', gulp.series('clean', 'build'))

/**
 * task fns
 */

function buildScripts(){
  return gulp.src(SRC_SCRIPTS)
    .pipe(gulp.dest(DEST + '/js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(DEST + '/js'))
}

function buildStyles(){
  return gulp.src(SRC_STYLES)
    .pipe(gulp.dest(DEST + '/css'))
    .pipe(minify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(DEST + '/css'))
}

function cleanDest(cb){
  return del(DEST, cb)
}

function release(){
  return gulp.src('./dist/**/*')
    .pipe(release({
      branch: 'dist'
    }))
}
