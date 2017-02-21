(function () {
  'use strict';

  angular.module("MenuApp")
  .component('categories', {
    templateUrl: 'src/menu_restaurant/templates/categories.template.html',
    bindings: {
      catlist: '<'
    }
  })
})();
