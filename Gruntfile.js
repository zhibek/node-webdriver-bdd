module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // backend test
        webdriver: {
            dev: {
                configFile: './wdio.conf.js'
            }
        },
        // frontend test
        karma: {
            dev: {
                configFile: './karma.conf.js'
            }
        },
    });

    // Load the plugin that provides the "webdriver" task.
    grunt.loadNpmTasks('grunt-webdriver');
    // Load the plugin that provides the "karma" task.
    grunt.loadNpmTasks('grunt-karma');
    
    grunt.registerTask('test:dev', ['webdriver:dev', 'karma:dev']);
};