module.exports = function (grunt) {

    // Set up webdriver to read from wdio.conf.js (default config file)
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webdriver: {
            dev: {
                configFile: './wdio.conf.js'
            }
        },
    });

    // setup webdriver:dev to execute webdriver tests
    grunt.loadNpmTasks('grunt-webdriver');

    // setup test:dev as a shortcut to webdriver:dev
    grunt.registerTask('test:dev', ['webdriver:dev']);

};