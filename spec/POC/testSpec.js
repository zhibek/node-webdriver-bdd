/**
 * To execute this test please download the NPM Jasmine package first and initialise a Jasmine
 * test suite by running:
 *
 * ```sh
 * $ npm install -g jasmine
 * $ jasmine init
 * ```
 *
 * Then run the test. Make sure you've all WebdriverIO dependencies installed
 *
 * ```sh
 * $ jasmine webdriverio.with.jasmine.spec.js
 * ```
 *
 */

var webdriverio = require('webdriverio');

describe('Google search POC', function () {
    it('search for test', function (done) {
        var googleUrl = 'http://google.com';
        var searchString = 'test';
        var searchQueryUrlPart = 'q=' + searchString;
        var searchInputSelector = '[name="q"]';
        // phantomJs has different button than selenium, 
        // so a couple of selectors are tested to determine which button exist
        var searchButtonSelectors = ["[name='btnG']", "[name='btnK']"];
        var searchButtonSelector;
        browser
                .url(googleUrl)
                .getTitle()
                .then(function (title) {
                    expect(title).toBe('Google');
                })
                .getValue(searchInputSelector)
                .then(function (value) {
                    expect(value).toBe('');
                })
                .setValue(searchInputSelector, searchString)
                .isExisting(searchButtonSelectors[1])
                .then(function (isExisting) {
                    if (isExisting === true) {
                        searchButtonSelector = searchButtonSelectors[1];
                    } else {
                        searchButtonSelector = searchButtonSelectors[0];
                    }
                    return browser.click(searchButtonSelector);
                })
                .getValue(searchInputSelector)
                .then(function (value) {
                    expect(value).toBe(searchString);
                })
                .url()
                .then(function (url) {
                    expect(url.value).toContain(searchQueryUrlPart);
                })
                .call(done);
    });
});