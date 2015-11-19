# node-webdriver-bdd

Proof-of-concept, basic setup to run Webdriver BDD tests on NodeJS.

## Tools

* *Karma* (**Test runner**) http://karma-runner.github.io/0.13/intro/how-it-works.html
* *Mocha* OR *Jasmine* (**Test description**) - https://mochajs.org/#assertions OR http://jasmine.github.io/2.3/introduction.html
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

See below for a sample command to run the tests:

```
npm install 
  && ./node_modules/bower/bin/bower install --allow-root --config.interactive=false 
  && ./node_modules/karma/bin/karma start --single-run --browsers PhantomJS
```