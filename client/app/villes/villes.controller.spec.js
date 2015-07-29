'use strict';

describe('Controller: VillesCtrl', function () {

  // load the controller's module
  beforeEach(module('maTableApp'));

  var VillesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VillesCtrl = $controller('VillesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
