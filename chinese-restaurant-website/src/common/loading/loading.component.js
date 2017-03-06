(function () {
  'use strict';

  angular.module('common')
  .component('loading', {
    template: '<img src="images/spinner.svg" ng-if="$ctrl.show">',
    controller: LoadingCompoentCtrl
  });

  LoadingCompoentCtrl.$inject = ['$rootScope'];
  function LoadingCompoentCtrl($rootScope) {
    var $ctrl =this;
    var listener;

    $ctrl.onInit = function () {
      $ctrl.show = false;
      listener = $rootScope.$on('spinner:activate', onSpinnerActivate);
    };

    $ctrl.onDestroy = function () {
      listener();//call to destroy the global listener when the local scope is destroyed
    }

    function onSpinnerActivate(event, data) {
      $ctrl.show = data.on;
    }
  }
})();
