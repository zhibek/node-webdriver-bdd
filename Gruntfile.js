module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // webdriver tests
        webdriver: {
            dev: {
                configFile: './wdio.conf.js'
            }
        },
    });

    // Load the plugin that provides the "webdriver" task.
    grunt.loadNpmTasks('grunt-webdriver');
    
    grunt.registerTask('test:dev', ['webdriver:dev']);
};