/**
 * Testing command is 'npm install && node_modules/.bin/wdio wdio.conf.js'
 *
 */

require('./../../support/core');

describe('Google search POC', function () {
    
    given('open google homepage' );
        and('check webpage title' );
        but('check search input value being empty' );
    when('fill search input' );
        and('click search button' );
    then('check search input value being searched-for value' );
        and('check search results webpage changed url' );
});