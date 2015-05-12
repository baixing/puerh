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
  var output = gulp.dest(DEST + '/js')
  return gulp.src(SRC_SCRIPTS)
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(output)
}

function buildStyles(){
  var output = gulp.dest(DEST + '/css')
  return gulp.src(SRC_STYLES)
    .pipe(minify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(output)
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
