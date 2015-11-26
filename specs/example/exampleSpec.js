/**
 * Example spec for google search
 */

// require core includes
// (mandatory for all tests)
require('./../../includes');

describe('Google Search Example', function() {
    
    given('open google homepage');
        and('check webpage title');
        but('check search input value being empty');

    when('fill search input');
        and('click search button');

    then('check search input value being searched-for value');
        and('check search results webpage changed url');

});