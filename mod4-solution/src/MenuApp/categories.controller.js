(function () {
'use strict';

angular.module('MenuAppX')
.controller('categoriesXController', categoriesXController);


categoriesXController.$inject = ['categoriesResult'];
function categoriesXController(categoriesResult) {
  var categoriesX = this;
  categoriesX.categories = categoriesResult.data;
  // console.log(categoriesX.categories[0].name);
};
})();
