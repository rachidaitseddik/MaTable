'use strict';

angular.module('maTableApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('villes', {
        url: '/villes',
        templateUrl: 'app/villes/villes.html',
        controller: 'VillesCtrl'
      });
  });