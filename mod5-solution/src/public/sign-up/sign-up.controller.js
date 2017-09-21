(function () {
  'use strict';

angular.module('common')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = [];
function RegistrationController() {
  var reg = this;

  reg.submit = function () {
    console.log("fdsfsd");
    reg.completed = true;
  };
}

})();
