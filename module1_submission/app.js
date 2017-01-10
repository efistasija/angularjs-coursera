(function(){
  'use strict'

  var app = angular.module("LunchChecker", []);
  app.controller("lunchCheckerCtrl", checkLunch);


  checkLunch.$inject = ['$scope'];

  function checkLunch($scope){
    $scope.msg = "";
    $scope.lunchMenu = "";

    $scope.checkMenuItems = function(){
      var items = $scope.lunchMenu;
      var numItems = countItemsInString(items);
      $scope.msg = findMessageForCount(numItems);
      var color = findColorForCount(numItems);
      $scope.borderClass = "border-" + color;
      $scope.textClass = "text-" + color;
    };

    function countItemsInString(str){
      var arrItems = 0;
      var arr = str.split(',');

      for(var i=0; i<arr.length; i++){
        arr[i] = arr[i].replace(/\s/g,"");
        if(arr[i] !== ""){
          arrItems ++;
        }
      }
      return arrItems;
    }

    function findMessageForCount(count){
      if(count <=0){
        return "Please enter data first";
      }
      else if(count <=3){
        return "Enjoy!";
      }
      else return "Too much!";
    }

    function findColorForCount(count){
      return (count <=0) ? "red" : "green";
    }
  }
})();
