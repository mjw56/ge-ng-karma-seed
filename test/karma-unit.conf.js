var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    //extra testing code
    'scripts/angular-mocks.js',

    //mocha stuff
    'test/mocha.conf.js',

    //test files
    './test/unit/GoalsConversation/controllers/*.js',
    './test/unit/GoalsConversation/services/*.js'
  ]);

  config.set(conf);
};