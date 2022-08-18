const CONFIG = {
  //Paths
  PATHS: {
    styles: {
      // Source to the main.scss with all the imports
      src: "src/scss/*.scss",

      // Files to watch for changes
      watch: "src/scss/**/*.scss",

      // Destination folder for css files
      dest: "public/stylesheets/",

      // Final css for production
      file: "public/stylesheets/main.css",
    },

    pages: {
      // Source to the Twig/Nunjucks files
      src: "src/views/**/*.twig",

      // Source to all files
      // basePath: "src/templates",

      // Destination folder to the HTML files
      // dest: "build/",

      // Files to watch for changes
      watch: "src/views/**/*.twig",

      // Final HTML files for production
      // files: "build/*.html",
    },

    scripts: {
      // Source to the main.js
      src: "src/javascript/*.js",

      // Files to watch for changes
      watch: "src/javascript/**/*.js",

      // Destination folder for the scripts
      dest: "public/javascripts/",
    },

    server: {
      rootPath: "build/",
    },

    data: {
      watch: "src/data/**/*.js"
    }
  },
};

exports.CONFIG = CONFIG;
