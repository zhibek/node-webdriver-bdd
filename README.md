# node-webdriver-bdd

Proof-of-concept, basic setup to run Webdriver BDD tests on NodeJS.

## Tools

* *Jasmine* (**Test description**) - http://jasmine.github.io/2.3/introduction.html
* *WebdriverIO* aka WebdriverJS (**Browser control layer**) - http://webdriver.io/
* *PhantomJS* (**Headless browser**) - http://phantomjs.org/

## Requirement

* Write a single BDD test on google.com to verify a search for "test".
* Run the test as a single command from the command line.
* Provide output on test status to standard output.
* Make it possible to automate with Drone (CI server) later.

## Test

* **Given** I visit google.com
* **When** I enter "test" in the search input
* **And** I click "Google Search"
* **Then** I should see the results page
* **And** I see "test" in the search input

## Command

```
  npm install && node_modules/.bin/wdio wdio.conf.js
```

## Steps to build a test case

* Create a new test file with naming format spec/**/*Spec.js where dir containing test file is not called 'support'
 * Test file should look like spec/POC/testSpec.js
* Titles in it method are converted to method names by removing spaces, hyphens and underscores, And camel casing the remaining text
 * Title to method name conversion look like 'go to original-page' -> 'goToOriginalPage'
* Actual methods should exist inside spec/support/context 
 * Context file should look like spec/support/context/mainContext.js
* Then add entry to load the new context inside spec/support/context/index.js
 * New context entry should look like `exports.xContext = require("./xContext.js");`
