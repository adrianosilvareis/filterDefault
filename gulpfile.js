var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('clean', function () {
    return gulp.src('dist/')
            .pipe(clean());
});

gulp.task('jshint', function () {
    return gulp.src(['*.filter.js', '*.module.js'])
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
});

gulp.task('uglify', ['clean'], function () {
    return gulp.src(['*.module.js','*.filter.js'])
                .pipe(uglify({mangle: true}))
                .pipe(concat('filterDefault.js'))
            .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['clean', 'jshint', 'uglify']);
