(function () {
  'use strict';

  angular.module("MenuApp")
  .component('items', {
    templateUrl: 'src/menu_restaurant/templates/items.template.html',
    bindings: {
      itemslist: '<'
    }
  })
})();
