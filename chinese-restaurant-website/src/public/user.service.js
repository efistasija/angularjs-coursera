(function () {
  'use strict';

  angular.module('public')
  .service('UserService', UserService);

  UserService.$inject = ['ApiPath'];
  function UserService(ApiPath) {
    var service = this;
    var user = {};

    service.saveUserInfo = function (userInfo) {
      user.firstName = userInfo.firstName;
      user.lastName = userInfo.lastName;
      user.email = userInfo.email;
      userInfo.hasOwnProperty('phone') ? (user.phone = userInfo.phone) : (user.phone = "");
      userInfo.hasOwnProperty('menuItem') ? (user.menuItem = userInfo.menuItem) : (user.menuItem = "");
      if(userInfo.hasOwnProperty('menuItemInfo')){
        user.menuItemTitle = userInfo.menuItemInfo.name;
        user.menuItemDescription = userInfo.menuItemInfo.description;
        user.menuItemImage = ApiPath + '/images/' + user.menuItem +'.jpg';
      }
    };

    service.getUserInfo = function () {
      return user;
    }


  }
})();
