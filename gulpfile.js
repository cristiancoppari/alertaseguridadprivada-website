/**
 * Global imports
 * @requires
 */

const { dest, src, series, watch } = require("gulp");
// const nunjucksRender = require("gulp-nunjucks-render");
// const del = require("del");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const sourceMaps = require("gulp-sourcemaps");
// const prettier = require("gulp-prettier");
const browserSyncModule = require("browser-sync").create();
// const browserSyncModule = require("browser-sync");
const purgeCSS = require("gulp-purgecss");
const babel = require("gulp-babel");
const nodemon = require("gulp-nodemon");
const webpack = require("webpack");
const gulpWebpack = require("webpack-stream");

/**
 * My imports
 */
const { CONFIG } = require("./config");
const webpackConfig = require("./webpack.config");

// console.log(webpackConfig);

/**
 * Enviroment
 */
const enviroment = process.env.NODE_ENV;
// console.log(process.env);
// console.log(enviroment);

/**
 * Configuration variables
 * All configuration variables can be found in the config.js file
 */

// Tasks

// Sass Task
// Compile Sass
function compileSass() {
  // Sass options
  const sassOptions = {
    outputStyle: "expanded",
  };

  // PostCSS plugins
  // dev enviroment: autoprefixer
  // prod enviroment: autoprefixer and minification
  const postcssPlugins =
    enviroment === "production"
      ? [autoprefixer(), cssnano()]
      : [autoprefixer()];

  return src(CONFIG.PATHS.styles.src)
    .pipe(sourceMaps.init())
    .pipe(sass(sassOptions).on("error", sass.logError))
    .pipe(postcss(postcssPlugins))
    .pipe(sourceMaps.write("."))
    .pipe(dest(CONFIG.PATHS.styles.dest));
}

// Browser Sync
function browserSync(done) {
  // Browser Sync configuration
  const browserSyncConfig = {
    // server: {
    //   baseDir: CONFIG.PATHS.server.rootPath,
    // },
    proxy: "http://localhost:3000",
    port: 5000
  };

  //Browser Sync Initialization
  browserSyncModule.init(browserSyncConfig);
  done();
  console.log("browser sync start")
}

// Browser Sync Reload
function browserSyncReload(done) {
  browserSyncModule.reload();
  done();
}

// Watch
function watchFiles(done) {
  // Changes in HTML
  watch(CONFIG.PATHS.pages.watch, series(browserSyncReload));

  // Changes in Sass
  watch(CONFIG.PATHS.styles.watch, series(compileSass, browserSyncReload));

  // Changes in Scripts
  watch(CONFIG.PATHS.scripts.watch, series(compileJs, browserSyncReload));

  // Changes in Data
  watch(CONFIG.PATHS.data.watch, series(browserSyncReload));

  done();
}

// Purge CSS
// This purge unused css classes for the production build
function cleanCSS(done) {
  const purgeConfig = {
    content: [CONFIG.PATHS.pages.src],
    keyframes: true,
    variables: true,
  };

  src(CONFIG.PATHS.styles.file)
    .pipe(purgeCSS(purgeConfig))
    .pipe(dest(CONFIG.PATHS.styles.dest));
  done();
}

// JavaScript Task
function compileJs(done) {
  // Babel configuration
  const babelConfig = {
    presets: ["@babel/env"],
  };

  src(CONFIG.PATHS.scripts.src)
    // .pipe(babel(babelConfig))
    .pipe(gulpWebpack(webpackConfig, webpack))
    .pipe(dest(CONFIG.PATHS.scripts.dest));
  done();
}

// Copy JS scripts
// This task is only used in dev
function copyJs(done) {
  src(CONFIG.PATHS.scripts.src)
    .pipe(dest(CONFIG.PATHS.scripts.dest));
  done();
}

// Uncomment this imports to use the command direct on the command line
// exports.nunjucksToHTML = nunjucksToHTML;
// exports.clean = clean;
// exports.compileSass = compileSass;

function nodemonTask(done) {
  let started = false;

  return nodemon({
    script: './bin/www',
    ext: 'twig js',
    env: { 'NODE_ENV': 'development' },
    watch: [CONFIG.PATHS.pages.watch, CONFIG.PATHS.data.watch],
    done: done,
    // tasks: ['compileSass']
    // legacyWatch: true,
  })
    .on("start", () => {
      if (!started) {
        done();
        started = true;
        console.log("started", started);
        // console.log(done);
      }
      console.log("nodemon start");
      // done();
    })
    .on("restart", () => console.log("nodemon restart"))
}

// Browser Sync
// function browserSyncTask(done) {
//   series(nodemonTask, () => {
//     browserSyncModule.init({
//       proxy: "http;//localhost:3000",
//       files: ["src/views/**/*.twig"],
//       port: 5000
//     })
//   })
//   done()
// }

exports.dev = series(
  // // clean,
  compileSass,
  // copyJs,
  compileJs,
  // cleanCSS,
  // // nunjucksToHTML,
  nodemonTask,
  browserSync,
  watchFiles
);

exports.prod = series(
  // clean,
  compileSass,
  cleanCSS,
  compileJs,
  // nunjucksToHTML,
  nodemonTask,
  browserSync,
  watchFiles
);

// exports.compileSass = compileSass;
// exports.nodemonTask = nodemonTask;
exports.compileJs = compileJs;

// exports.server = series(
//   nodemonTask,
//   browserSync,
//   watchFiles
// )