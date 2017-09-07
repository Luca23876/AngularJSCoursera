(function () {
'use strict';

angular.module('categoriesX')
.controller('categoriesXController', categoriesXController);


categoriesController.$inject = ['MenuDataService', 'categoriesResult'];
function categoriesController(MenuDataService, categoriesResult) {
  var ctrl = this;
  ctrl.categoriesR = categoriesResult;
}

})();
