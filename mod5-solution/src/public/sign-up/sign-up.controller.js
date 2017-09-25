(function () {
  'use strict';

angular.module('common')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService'];
function RegistrationController(MenuService) {
  var reg = this;
  MenuService.getItemShortName();
  reg.firstname;
  reg.lastname;
  reg.email;
  reg.phone;
  reg.favdish;
  reg.fail = false;
  reg.sa;
  reg.submit = function () {
    reg.sa = MenuService.checkDish(reg.favdish);
    if (reg.sa === true) {
      MenuService.addInfo(reg.firstname, reg.lastname, reg.email, reg.phone);
      reg.completed = true;
      reg.fail = false;
    }else {
      reg.completed = false;
      reg.fail = true;
    }
  };
}

})();
