(function () {
  'use strict';
  angular.module('common', [])
  .constant('ApiPath', 'https://shielded-lowlands-49220.herokuapp.com')
  .config(config);

  config.$inject = ['$httpProvider'];
  function config($httpProvider) {
    $httpProvider.interceptors.push('loadingHttpInterceptor');
  }
})();
