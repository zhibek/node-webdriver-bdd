# Webdriver tests

Run Webdriver BDD tests.


## Tools

* *Grunt* (**Task runner**) - http://gruntjs.com/getting-started
* *Jasmine* (**Test framework**) - http://jasmine.github.io/2.3/introduction.html
* *WebdriverIO* aka WebdriverJS (**Browser control layer**) - http://webdriver.io/
* *PhantomJS* (**Headless browser**) - http://phantomjs.org/


## Running the tests

```
  npm install && npm test
```


## Steps to build a test case

* Create a new test file with naming format `spec/**/*Spec.js` with a directory for your group of tests.
 * Test file should look like `spec/example/exampleSpec.js`.
 * Function-named: `it` in jasmine is replaced by `given`, `when`, `then`, `and`, and `but`.
* Titles in it method are converted to method names by removing spaces, hyphens and underscores, then camelcasing the remaining text.
 * Title to method name conversion looks like `go to original-page` -> `goToOriginalPage`.
* Actual methods should exist inside `contexts/`.
 * Context file should look like `contexts/**/exampleContext.js`.
* Add entry to load the new context inside `context/index.js`
 * New context entry should look like `exports.xContext = require("./x/xContext.js");`


## Example Test

### Requirement

* Write a single BDD test on google.com to verify a search for "test".
* Run the test as a single command from the command line.
* Provide output on test status to standard output.
* Make it possible to automate with Drone (CI server) later.

### Specification

* **Given** I visit google.com
* **When** I enter "test" in the search input
* **And** I click "Google Search"
* **Then** I should see the results page
* **And** I see "test" in the search input
