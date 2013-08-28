module.exports = function(grunt) {
	'use strict';

	// Project configuration.
	grunt.initConfig({
		vnum: {
			dist: {
				src: ['tests/test.txt'],
				overwrite: true,

				replacements: [{
					from: /"version": ".*"/ig,
					to: '"version": "<%= vnum.version_number %>"'
				}]
			}
		},

		jshint: {
			options: {
				eqeqeq: true,
				eqnull: true,
				browser: false,
				es3: false,
				forin: true,
				indent: 4,
				latedef: true,
				newcap: true,
				camelcase: true,
				bitwise: true,
				noarg: true,
				noempty: true,
				quotmark: 'single',
				undef: true,
				unused: true,
				strict: true,
				trailing: true,
				globals: {
					module: true
				}
			},

			all: ['Gruntfile.js', 'tasks/*']
		}
	});

	grunt.task.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-jshint');
};