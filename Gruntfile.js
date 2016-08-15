/*!
 * Gruntfile
 * @author Yong Zhen
 */
"use strict";

module.exports = function (grunt) {

  // Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    // Import package manifest
    pkg: grunt.file.readJSON("package.json"),

    project: {
      src: "src",
      dist: "dist",
      demo: "demo"
    },

    // Banner definitions
    meta: {
      banner: "/*\n" +
      " *  <%= pkg.name %> - <%= pkg.version %>\n" +
      " *  <%= pkg.description %>\n" +
      " *  <%= pkg.homepage %>\n" +
      " *\n" +
      " *  Made by <%= pkg.author %> \n" +
      " */\n"
    },

    browserSync: {
      bsFiles: {
        src: [
          "<%= project.demo %>/**/*.html",
          "<%= project.demo %>/css/**/*.css",
          "<%= project.demo %>/js/**/*.js"
        ]
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "./demo"
        }
      }
    },

    //watch for changes
    watch: {
      scripts: {
        files: "<%= project.src %>/**/*.js",
        tasks: ["common"]
      }
    },

    // Concat definitions
    concat: {
      options: {
        banner: "<%= meta.banner %>"
      },
      dist: {
        src: ["<%= project.src %>/jquery.email-autocomplete.js"],
        dest: "<%= project.dist %>/jquery.email-autocomplete.js"
      }
    },

    copy: {
      demo: {
        files: [{
          expand: true,
          cwd: '<%= project.dist %>',
          dest: '<%= project.demo %>/js/',
          src: ['jquery.email-autocomplete.js']
        }]
      }
    },

    // Lint definitions
    jshint: {
      files: [
        "<%= project.src %>/jquery.email-autocomplete.js",
        "Gruntfile.js"
      ],
      options: {
        jshintrc: ".jshintrc"
      }
    },

    // Minify definitions
    uglify: {
      dist: {
        src: ["<%= project.src %>/jquery.email-autocomplete.js"],
        dest: "<%= project.dist %>/jquery.email-autocomplete.min.js"
      },
      options: {
        banner: "<%= meta.banner %>",
        mangle: true
      }
    }

  });

  grunt.registerTask("travis", ["jshint"]);

  grunt.registerTask("common", [
    "jshint",
    "concat",
    "copy"
  ]);

  grunt.registerTask("server", [
    "common",
    "browserSync",
    "watch"
  ]);

  grunt.registerTask("default", [
    "common",
    "uglify"
  ]);

};
