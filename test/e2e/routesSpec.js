//
// test/e2e/routesSpec.js
//
describe("E2E: Testing Routes", function() {

  beforeEach(function() {
    browser().navigateTo('Wireframes/#/start');
  });

  it('should jump to the splashScreen path when / is accessed', function() {
    browser().navigateTo('Wireframes/#/');
    //pause();
    //expect(browser().location().path()).toBe("Wireframes/#/splashScreen///");
  });
});
