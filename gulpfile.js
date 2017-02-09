/* eric/katbiznis
*
* /gulpfile.js - gulp tasks
*
* code by email...
* started at 09/02/2017
*
*/

var gulp = require("gulp");
var image = require("gulp-image");
var pug = require("gulp-pug");

// --- Task for images

gulp.task( "images", function () {
    gulp.src( 'src/images/**' )
    .pipe( image() )
    .pipe( gulp.dest("assets/images") )
} );

// --- Task for pug

gulp.task( "html", function () {
    gulp.src( 'src/pug/**/*.pug' )
    .pipe( pug( {} ) )
    .pipe( gulp.dest(".") )
} );

// --- Task for images

// --- Task for images

// --- Task for images

// --- Task for images
