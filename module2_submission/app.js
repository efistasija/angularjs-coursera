(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuyCtrl = this;

    toBuyCtrl.items = ShoppingListCheckOffService.getItemsToBuy();

    toBuyCtrl.checkOffItem = function(index){
      ShoppingListCheckOffService.checkOffItem(index);
    }
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtCtrl = this;

    boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
  };

  function ShoppingListCheckOffService(){
    var service = this;
    var toBuyItems = [
      {name: 'cookies', quantity: 5},
      {name: 'coke', quantity: 2},
      {name: 'oranges', quantity: 15},
      {name: 'olives', quantity: 25},
      {name: 'toliet paper', quantity: 1},
    ];

    var boughtItems = [];

    service.checkOffItem = function(index){
      var item = toBuyItems[index];
      toBuyItems.splice(index,1);
      boughtItems.push(item);
    };

     service.getItemsToBuy= function(){
      return toBuyItems;
    };

    service.getBoughtItems = function(){
      return boughtItems;
    };

    };
})();
