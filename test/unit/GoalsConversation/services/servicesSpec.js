//
// test/unit/GoalsConversation/services/servicesSpec.js
//
describe("Unit: Testing Goals Conversation Service", function() {

  beforeEach(angular.mock.module('goalExplorer'));

  it('should contain a Goal Conversation Factory service', inject(function() {
    expect(goalExplorer.goalConversationFactory).not.to.equal(null);
  }));

  it('should have a working goalConversationFactory service', inject(['goalConversationFactory',function(gcf) {
    expect(gcf.gbq).not.to.equal(null);
    expect(gcf.length).to.equal(3);
    expect(gcf[0].subQuestion.length).to.equal(4);
  }]));
});