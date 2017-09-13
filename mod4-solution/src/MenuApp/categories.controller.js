(function () {
'use strict';

angular.module('MenuAppX')
.controller('categoriesXController', categoriesXController);


categoriesXController.$inject = ['categoriesResult'];
function categoriesXController(categoriesResult) {
  var categoriesX = this;
  categoriesX.cat = categoriesResult;
};
})();
