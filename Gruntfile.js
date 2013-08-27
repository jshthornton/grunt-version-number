'use strict';

module.exports = function(grunt) {

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
		}
	});

	grunt.task.loadTasks('tasks');
};