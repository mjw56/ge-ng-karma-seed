var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    //test files
    './test/e2e/GoalsConversation/controllers/*.js',
    './test/e2e/routesSpec.js'
  ]);

  conf.proxies = {
    '/': 'http://localhost:9999/'
  };

  conf.frameworks = ['ng-scenario'];

  config.set(conf);
};