(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsStateController', ItemsStateController);

  ItemsStateController.$inject = ['itemsListPromise', '$stateParams'];
  function ItemsStateController(itemsListPromise, $stateParams) {
    var items = this;
    items.itemsList = itemsListPromise.data.menu_items;
    console.log(items.itemsList)
    items.shortCatName = $stateParams.category;
  }
})();
