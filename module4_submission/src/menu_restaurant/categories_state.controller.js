(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesStateController', CategoriesStateController);

  CategoriesStateController.$inject = ['categoriesListPromise'];
  function CategoriesStateController(categoriesListPromise) {
  //  console.log(categoriesList);
    var categories = this;
    categories.categoriesList = categoriesListPromise.data;
  //  console.log(categoriesList);
  }
})();
