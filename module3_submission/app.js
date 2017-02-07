  (
    function(){
      'use strict';

      angular.module('NarrowItDownApp',[])
      .controller('NarrowItDownController', NarrowItDownController)
      .service('MenuSearchService', MenuSearchService)
      .constant('MenuItemsURL', "https://davids-restaurant.herokuapp.com")
      .directive("foundItems", FoundItemsDirective);

      function FoundItemsDirective(){
        var ddo = {
          templateUrl: "foundItems.html",
          scope: {
            found: "<",
            onRemove: "&"
          },
          controller: FoundItemsDirectiveController,
          bindToController: true,
          controllerAs: "list",
          link: FoundItemsDirectiveLink
        };

        return ddo;
      };

      //the directive link
      function FoundItemsDirectiveLink(scope, element, attrs, controller){
        scope.$watch('list.chechIfEmptyList()', function(newValue, oldValue){
          if(newValue === true){
            displayMenuMessage();
          }
          else{
            hideMenuMessage();
          }
        });

        function displayMenuMessage(){
          var messageElem = element.find("div.msg");
          messageElem.slideDown(300);
        }

        function hideMenuMessage(){
          var messageElem = element.find("div.msg");
          messageElem.slideUp(300);
        }
      }

      //the directive controller
      function FoundItemsDirectiveController(){
        var list = this;

        list.chechIfEmptyList = function(){
          return (((list.found !==undefined) && (list.found.length === 0)) ?  true : false);
        };
      }

      //main controller
      NarrowItDownController.$inject = ['MenuSearchService'];
      function NarrowItDownController(MenuSearchService){
        var narrowCtrl = this;

        narrowCtrl.searchTerm = "";

        narrowCtrl.narrowDownMenu = function(){
          var promise = MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm);

          promise.then(function(result){
            narrowCtrl.found = result;
          })
        };

        narrowCtrl.removeMenuItem = function(index){
          narrowCtrl.found.splice(index,1);
        }
      };

      //service
      MenuSearchService.$inject = ['$http', 'MenuItemsURL'];
      function MenuSearchService($http, MenuItemsURL) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm){

          return $http({
            method: 'GET',
            url: (MenuItemsURL + '/menu_items.json')
          }).then(function(result){
            var foundItems = [];
            if(searchTerm){
              var items = result.data.menu_items;

              for(var i=0; i< items.length; i++){
                  if(items[i]["description"].toLowerCase().indexOf(searchTerm) !== -1){
                    foundItems.push(items[i]);
                  }
                }
              }//end if

                return foundItems;
              }).catch(function(error){});

        }
      };

    }
  )();
