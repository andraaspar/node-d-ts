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
				},
				compile: {
					command: '"node_modules/.bin/tsc" --noLib --out "build/test.js" "test/Main.ts"'
				}
			}
		});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-sas');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('update', ['shell:update','sas:update']);
	grunt.registerTask('compile', ['clean:test','shell:compile']);
	grunt.registerTask('default', ['compile']);
};