(function () {
  'use strict';

  angular.module('public')
  .controller('RegistrationController',RegistrationController);

  RegistrationController.$inject = ['MenuService', 'UserService']
  function RegistrationController(MenuService, UserService) {
    var regCtrl = this;
    regCtrl.user = {};
    regCtrl.registered = false;
    regCtrl.infoMessage = "";
    regCtrl.errorMessage = "";

    regCtrl.enableSubmit = true;

    regCtrl.submit = function () {
      if(regCtrl.user.hasOwnProperty('firstName') && regCtrl.user.hasOwnProperty('lastName') && regCtrl.user.hasOwnProperty('email')){
        console.log(regCtrl.user);
        UserService.saveUserInfo(regCtrl.user);
        regCtrl.infoMessage = "Your information has been saved.";
      }
      else{
        regCtrl.infoMessage = "First name, last name and email are required to sign up for our newsletter.";
      }
    };

    regCtrl.getMenuItem = function () {
      if(regCtrl.user.hasOwnProperty('menuItem')){
        regCtrl.enableSubmit = false;

         var promise = MenuService.getMenuItem(regCtrl.user.menuItem);

         promise.then(function (result) {
           regCtrl.user.menuItemInfo = result.data;
           regCtrl.errorMessage = "";
         }, function (error) {
           regCtrl.errorMessage = "No such menu number exists";
           if(regCtrl.user.hasOwnProperty('menuItemInfo')){
             delete regCtrl.user.menuItemInfo;
           }
           delete regCtrl.user.menuItem;
         })
         .finally(function () {
           regCtrl.enableSubmit = true;
         });
      }
      else{
        regCtrl.enableSubmit = true;
      }
  };

  regCtrl.blockSubmitBtn = function () {
    regCtrl.enableSubmit = false;
  }

  }
})();
