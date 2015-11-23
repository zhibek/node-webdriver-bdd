var exports = module.exports = {};

var webdriverio = require('webdriverio');

var googleUrl = 'http://google.com';
var searchString = 'test';
var searchQueryUrlPart = 'q=' + searchString;
var searchInputSelector = '[name="q"]';
// phantomJs has different button than selenium, 
// so a couple of selectors are tested to determine which button exist
var searchButtonSelectors = ["[name='btnG']", "[name='btnK']"];
var searchButtonSelector;
// 'done' is used to keep specs 'it function calls' Asynchronous
// so no spec will start until previous specs are finished
// and no spec will finish untill done is called

exports.openGoogleHomepage = function (done) {
    browser
            .url(googleUrl)
            .call(done);
};
exports.checkWebpageTitle = function (done) {
    browser
            .getTitle()
            .then(function (title) {
                expect(title).toBe('Google');
            })
            .call(done);
};
exports.checkSearchInputValueBeingEmpty = function (done) {

    browser
            .getValue(searchInputSelector)
            .then(function (value) {
                expect(value).toBe('');
            })
            .call(done);
};
exports.fillSearchInput = function (done) {

    browser
            .setValue(searchInputSelector, searchString)
            .call(done);
};
exports.clickSearchButton = function (done) {

    browser
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
            .call(done);
};
exports.checkSearchInputValueBeingSearchedForValue = function (done) {

    browser
            .getValue(searchInputSelector)
            .then(function (value) {
                expect(value).toBe(searchString);
            })
            .call(done);
};
exports.checkSearchResultsWebpageChangedUrl = function (done) {

    browser
            .url()
            .then(function (url) {
                expect(url.value).toContain(searchQueryUrlPart);
            })
            .call(done);
};

