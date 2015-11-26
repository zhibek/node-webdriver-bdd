exports.config = {
    // location of specs
    specs: [
        './specs/**/*Spec.js'
    ],
    exclude: [],
    // allow any selenium-like server to be used (we'll use phantomjs)
    capabilities: [{}],
    logLevel: 'silent',
    coloredLogs: true,
    // screenshotPath ignored for phantomjs
    screenshotPath: './errorShots/',
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    framework: 'jasmine',
    reporter: 'spec',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 80000,
        expectationResultHandler: function (passed, assertion) {}
    },
    onPrepare: function () {
		// start phantom-js
        var phantomjs = require('phantomjs-server');
        phantomjs.start();
    },
    before: function () {},
    after: function (failures, pid) {},
    onComplete: function () {
		// stop phantom-js
        require('child_process').exec(process.platform === 'win32' ? 'taskkill /F /IM phantomjs.exe /T' : 'killall phantomjs',
                function (error, stdout, stderr) {
                    console.log(stdout);
                });
    }
};
