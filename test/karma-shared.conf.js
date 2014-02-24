module.exports = function() {
  return {
    basePath: '../',
    frameworks: ['mocha'],
    reporters: ['progress'],
    browsers: ['PhantomJS'],
    autoWatch: true,

    // these are default values anyway
    singleRun: false,
    colors: true,
    
    files : [
      //3rd Party Code
      'scripts/angular.js',
      'scripts/angular-ui-router.js',
      'scripts/angular-route.js',
      'scripts/angular-resource.js',
      'scripts/angular-animate.js',
      'scripts/ui-bootstrap-tpls-0.10.0.min.js',
      'scripts/toaster.js',
      'scripts/bindonce.js',

      //App-specific Code
      'content/js/goalsApp.js',
      'content/js/ge-route-config.js',

      // App Section-Specific Code

      // Alert Messages
      'content/features/geAlertMessages/controllers/*.js',

      // Dependents
      'content/features/geDependents/controllers/*.js',
      'content/features/geDependents/directives/*.js',
      'content/features/geDependents/services/*.js',

      // Drivers
      'content/features/geDrivers/controllers/*.js',

      // Explore Goals
      'content/features/geExploreGoal/controllers/*.js',
      'content/features/geExploreGoal/directives/*.js',
      'content/features/geExploreGoal/filters/*.js',
      'content/features/geExploreGoal/services/*.js',

      // Finder
      'content/features/geDrivers/controllers/*.js',

      // Goals Conversation
      'content/features/geGoalsConversation/controllers/*.js',
      'content/features/geGoalsConversation/services/*.js',
      'content/features/geExploreGoal/services/*.js',
      'content/features/geFinder/services/*.js',

      // Goal Select List
      'content/features/geGoalSelectList/controllers/*.js',
      'content/features/geGoalSelectList/directives/*.js',
      
      // Preferences
      'content/features/gePreferences/controllers/*.js',

      // Report
      'content/features/geReport/controllers/*.js',
      'content/features/geReport/*.js',

      //Test-Specific Code
      'node_modules/chai/chai.js',
      'test/lib/chai-should.js',
      'test/lib/chai-expect.js'
    ]
  }
};
