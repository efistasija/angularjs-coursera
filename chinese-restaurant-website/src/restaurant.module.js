(function () {
  'use strict';

  angular.module('restaurant', ['public'])
  .config(config);

  config.$inject = ['$urlRouterProvider'];
  function config($urlRouterProvider) {
    //define a url if no other url matches
    $urlRouterProvider.otherwise('/');
  }
})();
