/*
 * @Author: loveyy520 201357337@qq.com
 * @Date: 2022-11-09 21:21:33
 * @LastEditors: loveyy520 201357337@qq.com
 * @LastEditTime: 2022-11-09 22:33:11
 * @FilePath: \onlyy-assets\build\generate.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import gulp from "gulp";
// import minifyCSS from "gulp-minify-css";
// import concat from "gulp-concat";
// import uglify from "gulp-uglify";

const gulp = require("gulp"),
  minifyCSS = require("gulp-minify-css"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify");

//压缩css

gulp.task("minifycss", function () {
  return (
    gulp
      .src("files-raw/css/*.css") //需要操作的文件
      // .pipe(concat("custom.css")) // 合并
      .pipe(minifyCSS()) //执行压缩
      .pipe(gulp.dest("dist/css"))
  ); //输出文件夹
});

//压缩，合并 js

gulp.task("minifyjs", function () {
  return gulp
    .src("files-raw/js/*.js") //需要操作的文件

    .pipe(concat("custom.js")) //合并所有js到main.js

    .pipe(gulp.dest("dist/js")) //输出到文件夹

    .pipe(uglify()) //压缩

    .pipe(gulp.dest("dist/js")); //输出
});

gulp.task("default", gulp.parallel("minifycss", "minifyjs"));
