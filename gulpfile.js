

const gulp = require("gulp");

gulp.task("copy-html",function(){
    return gulp.src("./*.html")
    .pipe(gulp.dest("./dist/html"))
    .pipe(connect.reload());
})

gulp.task("copy-js",function(){
    return gulp.src(["./*.js","!./gulpfile.js"])
    .pipe(gulp.dest("./dist/scripts"))//我知道了，再来一次,果然，是写错了
    .pipe(connect.reload());
})

gulp.task("copy-php",function(){
    return gulp.src("./*.php")
    .pipe(gulp.dest("./dist/php"))
    .pipe(connect.reload());
})

gulp.task("copy-css",function(){
    return gulp.src("./*.css")
    .pipe(gulp.dest("./dist/css"))
    .pipe(connect.reload());
})

const connect = require("gulp-connect");

gulp.task("server",function(){
    connect.server({
        root : "dist",
        port : 8888,
        livereload : true
    });
});

gulp.task("watch",function(){
    gulp.watch("./*.html",["copy-html"]);
    gulp.watch("./*.js",["copy-js"]);
    gulp.watch("./*.php",["copy-php"]);
    gulp.watch("./*.css",["copy-css"]);
});

gulp.task("default",["watch","server"])

gulp.task("hello",function(){
    return console.log("hello");
});