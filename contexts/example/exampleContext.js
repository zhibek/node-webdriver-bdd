/**
 * Example context for google search
 */

// Set elements / strings
var googleUrl = 'http://google.com';
var googleTitle = 'Google';
var searchString = 'test';
var searchQueryUrlPart = 'q=' + searchString;
var searchInputSelector = '[name="q"]';
var searchButtonSelector = "[name='btnG']";

var exports = module.exports = {};

// 'open google homepage'
exports.openGoogleHomepage = function (done) {
    browser
            .url(googleUrl)
            .call(done);
};

// 'check webpage title'
exports.checkWebpageTitle = function (done) {
    browser
            .getTitle()
            .then(function (title) {
                expect(title).toBe(googleTitle);
            })
            .call(done);
};

// 'check search input value being empty'
exports.checkSearchInputValueBeingEmpty = function (done) {

    browser
            .getValue(searchInputSelector)
            .then(function (value) {
                expect(value).toBe('');
            })
            .call(done);
};

// 'fill search input'
exports.fillSearchInput = function (done) {

    browser
            .setValue(searchInputSelector, searchString)
            .call(done);
};

// 'click search button'
exports.clickSearchButton = function (done) {

    browser
            .click(searchButtonSelector)
            .call(done);
};

// 'check search input value being searched-for value'
exports.checkSearchInputValueBeingSearchedForValue = function (done) {

    browser
            .getValue(searchInputSelector)
            .then(function (value) {
                expect(value).toBe(searchString);
            })
            .call(done);
};

// 'check search results webpage changed url'
exports.checkSearchResultsWebpageChangedUrl = function (done) {

    browser
            .url()
            .then(function (url) {
                expect(url.value).toContain(searchQueryUrlPart);
            })
            .call(done);
};