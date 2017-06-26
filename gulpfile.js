var gulp = require('gulp');
var Server = require('karma').Server;
var nodemon = require('gulp-nodemon');
var less = require('gulp-less');
var path = require('path');

gulp.task('test', function(done) {
    new Server({
        configFile: __dirname + '/karma.conf.coffee',
        singleRun: true
    }, done).start()
});

gulp.task('start', function(){
    nodemon({
        script: 'server.js',
        ext: 'js html',
        env: { 'NODE_ENV': 'development'}
    })
});

gulp.task('less', function(){
    return gulp.src('./app/*.less')
           .pipe(less({
               paths: [path.join(__dirname, 'less', 'includes')]
           }))
           .pipe(gulp.dest('./app'));
});

gulp.task('watch', function() {
    gulp.watch('./app/*.less', ['less']);
})