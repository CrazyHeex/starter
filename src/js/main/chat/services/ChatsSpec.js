describe('Service: app.chat.Chats', function () {

  // load the service's module
  beforeEach(module('app.chat'));

  // instantiate service
  var service;

  //update the injection
  beforeEach(inject(function (_Chats_) {
    service = Chats;
  }));

  /**
   * @description
   * Sample test case to check if the service is injected properly
   * */
  it('should be injected and defined', function () {
    expect(service).toBeDefined();
  });
});
