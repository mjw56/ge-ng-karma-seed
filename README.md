# AngularJS Karma Seed #
Seed repository to get started with testing the Goal Explorer prototype with karma.

## Dependencies ##
[node.js](http://nodejs.org "node")

## Details ##
### `package.json`

The 'devDependencies' object contains the required node packages which will do all the heavy lifting for testing the application. You can find out more information for any of the packages by visiting [npm](https://www.npmjs.org "npm") and searching for the package name.

### `Gruntfile.js`

This Gruntfile only contains the necessities for testing an angular application with karma. I won't go into the details of how grunt works here, there is plenty of information about that [on the gruntjs site](http://gruntjs.com/getting-started "GruntJS")

### `test/`

This directory contains all the important configuration files for karma and also all of the test specs. The shared configuration file is where all of the javascript files to be tested are included. Then, there are two other configuration files for e2e (end to end) and unit testing which contain the respective test files. The unit and e2e test files are split into their own folders. I have included working specs for both folders which currently only test the Goals Conversation feature. Matsko from the angular core dev team gave a [great walkthrough of testing an angular js application](http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html "Full Spectrum Testing with AngularJS and Karma"). This seed repository was based off his article and I recommend reading it as he does a great job of going into the details of how to test an angular application with karma. 

## Installation ##
Clone this repository or download the zip file. **_The Gruntfile.js, package.json and test directory all need to reside in the root of the Goal Explorer application in order to work correctly_**. Also, in order for karma to be made aware of the goalExplorer module we will need to place it on the window scope in goalsApp.js:

```javascript
var goalExplorer = window.goalExplorer = angular.module('goalExplorer', ....);
```

Now we can install dependencies from package.json:

```bash
$ npm install
```
Now we are ready to start running grunt test commands:

```bash
$ grunt test
```

## Usage ##
This repository contains grunt tasks for running either unit tests, e2e tests, or running both. Similarly, we can do the same thing while attaching a live listener to the javascript files which we are testing. This can allow the tests to execute immediately after any change has been detected on files which are being watched. Watched files can be defined in karma-shared-conf.js.

Run Tests:
```bash
$ grunt test
```
Run only Unit Tests:
```bash
$ grunt test:unit
```
Run only E2E Tests:
```bash
$ grunt test:e2e
```
Run all Tests with watcher:
```bash
$ grunt autotest
```
Run only Unit Tests with file watchers:
```bash
$ grunt autotest:unit
```
Run only E2E Tests with watchers:
```bash
$ grunt autotest:e2e
```