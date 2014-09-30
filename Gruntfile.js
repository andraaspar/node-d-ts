module.exports = function(grunt) {
	
	grunt.initConfig({
			clean: {
				test: ['build']
			},
			sas: {
				update: {}
			},
			shell: {
				update: {
					command: [
						'bower update',
						'bower prune',
						'bower install'
					].join('&&')
				}
			},
			typescript: {
				test: {
					files: {
						'build/test.js': 'test/Main.ts'
					}
				}
			}
		});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-sas');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-typescript');

	grunt.registerTask('update', ['shell:update','sas:update']);
	grunt.registerTask('compile', ['clean:test','typescript:test']);
	grunt.registerTask('default', ['compile']);
};