'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-text-replace');

	// ==========================================================================
	// TASKS
	// ==========================================================================

	grunt.registerMultiTask('vnum', 'Update file version numbers from an argument.', function() {
		var versionNumber = grunt.option('version_number');

		//Do error check
		if(versionNumber === void 0) {
			grunt.log.error('ERROR: Version number argument missing. Usage: "--version_number x.x.x"');
			return false;
		}

		var config = grunt.config.getRaw(this.name + '.' + this.target);

		grunt.config.set('replace.vnum', config);
		grunt.config.set('vnum.version_number', versionNumber);

		grunt.task.run('replace:vnum');
	});

};
