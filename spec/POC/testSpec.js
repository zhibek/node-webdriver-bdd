/**
 * Testing command is 'npm install && node_modules/.bin/wdio wdio.conf.js'
 *
 */

require('./../support/core');

describe('Google search POC', function () {
    
    it('open google homepage' );
    it('check webpage title' );
    it('check search input value being empty' );
    it('fill search input' );
    it('click search button' );
    it('check search input value being searched-for value' );
    it('check search results webpage changed url' );
});