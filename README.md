# node-webdriver-bdd

Proof-of-concept, basic setup to run Webdriver BDD tests on NodeJS.

## Tools

* *Grunt* (**Task runner**) - http://gruntjs.com/getting-started
* *Karma* (**Test runner**) - http://karma-runner.github.io/0.13/intro/how-it-works.html
* *Jasmine* (**Test framework**) - http://jasmine.github.io/2.3/introduction.html
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
  npm install && npm test
```

## Steps to build a test case

* Create a new test file with naming format spec/(backend|frontend)/**/*Spec.js where dir containing test file is not called 'support'
 * Test file should look like spec/(backend|frontend)/POC/testSpec.js
 * Function-named: 'it' in jasmine is replaced by 'given', 'when', 'then', 'and', and 'but'
* Titles in it method are converted to method names by removing spaces, hyphens and underscores, And camel casing the remaining text
 * Title to method name conversion look like 'go to original-page' -> 'goToOriginalPage'
* Actual methods should exist inside spec/support/context/(backend|frontend)/ 
 * Context file should look like spec/support/context/(backend|frontend)/mainContext.js
* Then for backend context files, add entry to load the new context inside spec/support/context/backend/index.js
 * New context entry should look like `exports.xContext = require("./xContext.js");`
