(function () {
'use strict';

angular.module('MenuAppX')
.controller('MenuAppXController', MenuAppXController);


MenuAppController.$inject = ['MenuDataService', 'itemsResult', 'categoriesResult'];
function MenuAppController(MenuDataService, itemsResult, categoriesResult) {
  var ctrl = this;
  ctrl.itemsR = itemsResult;
}

})();
