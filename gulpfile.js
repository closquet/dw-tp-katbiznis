/* eric/katbiznis
*
* /gulpfile.js - gulp tasks
*
* code by email...
* started at 09/02/2017
*
*/
//--Config--//
var src = {
    img: "src/images/**",
    pug: "src/pug/**/*.pug",
    scss: "src/sass/**/*.scss",
    js: "src/js/**/*.js"
},
    dest = {
    img: "assets/images",
    html: ".",
    css: "assets/css",
    js: "assets/js"
};


//--Require--//
var gulp = require("gulp"),
    image = require("gulp-image"),
    pug = require("gulp-pug"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    csso = require("gulp-csso"),
    babel = require("gulp-babel"),
    browserSync = require('browser-sync').create();

// --- Task for images

gulp.task( "images", function () {
    gulp.src( src.img )
    .pipe( image() )
    .pipe( gulp.dest( dest.img ) )
} );

// --- Task for html

gulp.task( "html", function () {
    gulp.src( src.pug )
    .pipe( pug( {} ) )
    .pipe( gulp.dest( dest.html ) )
} );

// --- Task for styles

gulp.task( "css", function () {
    gulp.src( src.scss )
    .pipe( sass().on( "error" , sass.logError ) )
    .pipe( autoprefixer() )
    .pipe( csso() )
    .pipe( gulp.dest( dest.css ) )
} );

// --- Task for js

gulp.task( "js", function () {
    gulp.src( src.js )
    .pipe( babel() )
    .pipe( gulp.dest( dest.js ) )
} );

// --- Task for browser-sync

gulp.task( "browserSync", function() {
    browserSync.init( {
        server: {
            baseDir: "./"
        }
    } );
} );

// --- Task for watch

gulp.task( "watch", [ "browserSync" ], function () {
    gulp.watch( src.img, [ "images" ] );
    gulp.watch( src.pug, [ "html" ] );
    gulp.watch( src.scss, [ "css" ] );
    gulp.watch( src.js, [ "js" ] );

    gulp.watch( dest.html + "/**/*.html", browserSync.reload );
    gulp.watch( dest.css + "/**/*.css", browserSync.reload );
    gulp.watch( dest.js + "/**/*.js", browserSync.reload );
} );

// --- Task for alias

gulp.task( "default" , [ "images", "css", "html", "js" ]);
gulp.task( "work" , [ "default", "watch" ]);
