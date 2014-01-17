/*!
 * Gruntfile
 * @author Yong Zhen
 */
"use strict";

/**
 * Livereload and connect variables
 */
var LIVERELOAD_PORT = 35729;
var lrSnippet = require("connect-livereload")({
  port: LIVERELOAD_PORT
});
var mountFolder = function (connect, dir) {
  return connect.static(require("path").resolve(dir));
};

module.exports = function(grunt) {


	// dynamically load npm tasks
	require("load-grunt-tasks")(grunt, ["grunt-*"]);

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("plugin.meta.json"),

		project: {
			src: "src",
			dist: "dist",
			demo: "demo"
		},

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author.name %> " + "<<%= pkg.author.email %>>\n" +
				" *  Under <%= pkg.licenses[0].type %> License " + "<<%= pkg.licenses[0].url %>>\n" +
				" */\n"
		},

		connect: {
      options: {
        port: 9000,
        hostname: "*"
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [lrSnippet, mountFolder(connect, "demo")];
          }
        }
      }
    },

    //open server in browser
    open: {
      server: {
        path: "http://localhost:<%= connect.options.port %>"
      }
    },

    //watch for changes
    watch: {
      concat: {
        files: "<%= project.src %>/{,*/}*.js",
        tasks: ["common"]
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          "<%= project.demo %>/**/*.{html,aspx}",
          "<%= project.demo %>/css/*.css",
          "<%= project.demo %>/js/{,*/}*.js"
        ]
      }
    },

		// Concat definitions
		concat: {
			dist: {
				src: ["<%= project.src %>/jquery.email-autocomplete.js"],
				dest: "<%= project.dist %>/jquery.email-autocomplete.js"
			},
			options: {
				banner: "<%= meta.banner %>"
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
				src: ["<%= project.dist %>/jquery.email-autocomplete.js"],
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
		"connect:livereload",
    "open",
    "watch"
	]);

	grunt.registerTask("default", [
		"common",
		"uglify"
	]);

};
