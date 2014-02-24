//
// test/e2e/GoalsConversation/controllers/controllersSpec.js
//
describe("E2E: Testing Goals Conversation Controllers", function() {

  beforeEach(function() {
    browser().navigateTo('Wireframes/#/goalsconversation/landing');
  });

  it('should have a working landing controller that applies three questions to the scope', function() {
    expect(element('#gbq-landing').html()).toBeDefined();
    expect(element('#gbq-landing li').count()).toBe(3);
  });

  it('should have a working secondary controller that applies four questions to the scope on Just Enough Page', function() {
  	browser().navigateTo('Wireframes/#/goalsconversation/secondary/justEnough');
    expect(element('#gbq-secondary').html()).toBeDefined();
    expect(element('#gbq-secondary li').count()).toBe(4);
  });

  it('should have a working secondary controller that applies four questions to the scope on Not Enough Page', function() {
  	browser().navigateTo('Wireframes/#/goalsconversation/secondary/notEnough');
    expect(element('#gbq-secondary').html()).toBeDefined();
    expect(element('#gbq-secondary li').count()).toBe(4);
  });

  it('should have a working secondary controller that applies four questions to the scope on More Than Enough Page', function() {
  	browser().navigateTo('Wireframes/#/goalsconversation/secondary/moreEnough');
    expect(element('#gbq-secondary').html()).toBeDefined();
    expect(element('#gbq-secondary li').count()).toBe(4);
  });

  it('should add goal status bar when item selected', function() {
  	browser().navigateTo('Wireframes/#/goalsconversation/secondary/justEnough');
    element('#gbq-secondary li:nth-of-type(1)').click();
    expect(element('#gbq-goals-status .goal-status-text strong').html()).toBe('Add Selected Goals');
  });

  it('should add goal status bar when item selected', function() {
  	browser().navigateTo('Wireframes/#/goalsconversation/secondary/notEnough');
    element('#gbq-secondary li:nth-of-type(1)').click();
    expect(element('#gbq-goals-status .goal-status-text strong').html()).toBe('Add Selected Goals');
  });

  it('should add goal status bar when item selected', function() {
  	browser().navigateTo('Wireframes/#/goalsconversation/secondary/moreEnough');
    element('#gbq-secondary li:nth-of-type(1)').click();
    expect(element('#gbq-goals-status .goal-status-text strong').html()).toBe('Add Selected Goals');
  });

  it('should go to the start screen when home icon is clicked from Just Enough screen', function() {
  	browser().navigateTo('Wireframes/#/goalsconversation/secondary/justEnough');
  	expect(element('#gbq-home').count()).toBe(1);
    element('#gbq-home').click();
    expect(browser().location().path()).toBe("/start");
  });

  it('should go to the start screen when home icon is clicked from Not Enough screen', function() {
  	browser().navigateTo('Wireframes/#/goalsconversation/secondary/notEnough');
  	expect(element('#gbq-home').count()).toBe(1);
    element('#gbq-home').click();
    expect(browser().location().path()).toBe("/start");
  });

  it('should go to the start screen when home icon is clicked from More Than Enough screen', function() {
  	browser().navigateTo('Wireframes/#/goalsconversation/secondary/moreEnough');
  	expect(element('#gbq-home').count()).toBe(1);
    element('#gbq-home').click();
    expect(browser().location().path()).toBe("/start");
  });
});