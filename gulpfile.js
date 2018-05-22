"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');

var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');

var config = 
{
    releasefolder: 'dist',
    port: 3000,
    devBaseUrl : 'http://localhost',
    paths : 
    {
        html : './src/*.html',
        mainJs : './src/main.js',
        js  :  './src/**/*.js',
        css : [
                './src/**/*.css',
                'node_modules//font-awesome/css/font-awesome.min.css',
                'node_modules/bootstrap/dist/css/bootstrap.min.css',
                'node_modules/bootstrap/dist/css/bootstrap_theme.min.css'
              ],

        fonts :
              [
                'node_modules/font-awesome/fonts/*.*',
              ],
        images : 
              [
                './src/images/*',
              ],

        dist : './dist'
    }
}

gulp.task('connect', function()
  {
      connect.server({
            root : [config.releasefolder],
            port : config.port,
            devBaseUrl : config.devBaseUrl,
            livereload : true
         });
  }
);

gulp.task('open', ['connect'], function()
{
   var devurl = config.devBaseUrl + ':' + config.port + '/';
   gulp.src('dist/index.html')
       .pipe(open({url: devurl}))
});

gulp.task('html', function() 
    {
        gulp.src(config.paths.html)
            .pipe(gulp.dest(config.paths.dist))
            .pipe(connect.reload());
    }
);

gulp.task('js', function() 
    {
        var scriptPath = config.paths.dist + '/scripts';
        browserify(config.paths.mainJs)
            .transform(reactify)
            .bundle()
            .on('error', console.error.bind(console))
            .pipe(source('bundle.js'))
            .pipe(gulp.dest(scriptPath))
            .pipe(connect.reload());
    }
);

gulp.task('css', function() 
    {
        var cssPath = config.paths.dist + '/css';
        gulp.src(config.paths.css)
            .pipe(concat('bundle.css'))
            .pipe(gulp.dest(cssPath))
            .pipe(connect.reload());
    }
);

gulp.task('images', function() 
    {
        var imagesPath = config.paths.dist + '/images';
        gulp.src(config.paths.images)
            .pipe(gulp.dest(imagesPath))
            .pipe(connect.reload());
    }
);

gulp.task('fonts', function() 
    {
        var fontsPath = config.paths.dist + '/fonts';
        gulp.src(config.paths.fonts)
            .pipe(gulp.dest(fontsPath));
    }
);


gulp.task('watch', function()
{
   gulp.watch(config.paths.html, ['html']);
   gulp.watch(config.paths.js, ['js']);
   gulp.watch(config.paths.css, ['css']);
   gulp.watch(config.paths.images, ['images']);
});

gulp.task('default', ['html', 'js', 'css', 'fonts', 'images', 'open', 'watch']);
