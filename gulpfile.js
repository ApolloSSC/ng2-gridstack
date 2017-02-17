/// <binding ProjectOpened='watch.ts' />
var ts = require('gulp-typescript');
var gulp = require('gulp');


var tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript')
});
gulp.task('ts', function (done) {
    var tsResult = gulp.src([
            "src/**/*.ts"
    ])
        .pipe(tsProject(), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./src'));
});

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('src/**/*.ts', ['ts']);
});