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
				jshintrc: '.jshintrc'
			},

			all: ['Gruntfile.js', 'tasks/*']
		}
	});

	grunt.task.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-jshint');
};