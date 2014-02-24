//
// test/unit/GoalsConversation/controllers/controllersSpec.js
//
describe("Unit: Testing Goal Conversation Controllers", function() {
  beforeEach(angular.mock.module('goalExplorer'));

  it('should have a goalsConversationSecondaryController controller', function() {
    expect(goalExplorer.goalsConversationSecondaryController).not.to.equal(null);
  });

  it('should have a goalsConversationLandingController controller', function() {
    expect(goalExplorer.goalsConversationLandingController).not.to.equal(null);
  });

  it('should have a properly working goalsConversationSecondaryController controller', inject(function($rootScope, $controller, $stateParams, goalConversationFactory, goalDataService, finderService, $state, $timeout, $modal, $log) {
    var $scope = $rootScope.$new();
    var ctrl = $controller('goalsConversationSecondaryController', {
      $scope : $scope
    });
  }));

  it('should have a properly working goalsConversationLandingController controller', inject(function($rootScope, $controller, finderService, goalConversationFactory) {
    var $scope = $rootScope.$new();
    var ctrl = $controller('goalsConversationLandingController', {
      $scope : $scope
    });
  }));
});