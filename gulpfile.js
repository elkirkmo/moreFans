var gulp = require('gulp');
var Server = require('karma').Server;
var nodemon = require('gulp-nodemon');

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
})