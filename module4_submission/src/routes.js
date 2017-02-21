(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfigFunction);

  RoutesConfigFunction.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfigFunction($stateProvider, $urlRouterProvider) {

    // setup a default path
    $urlRouterProvider.otherwise('/')

    //setup states
    $stateProvider

    //home
    .state('home', {
      url: '/',
      templateUrl: 'src/menu_restaurant/templates/home.template.html'
    })
    //categories
    .state('categories',{
      url: '/categories',
      templateUrl: 'src/menu_restaurant/templates/categories_state.template.html',
      controller: 'CategoriesStateController as categories',
      resolve: {
        categoriesListPromise: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    }).
    state('items',{
      url: '/items/{category}',
      templateUrl: 'src/menu_restaurant/templates/items_state.template.html',
      controller: 'ItemsStateController as items',
      resolve: {
        itemsListPromise: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.category);
        }]
      }
    });
  };
})();
