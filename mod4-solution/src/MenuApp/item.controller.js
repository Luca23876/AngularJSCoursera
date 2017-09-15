(function () {
'use strict';

angular.module('MenuAppX')
.controller('itemsXController', itemsXController);


itemsXController.$inject = ['MenuDataService', '$stateParams'];
function itemsXController(MenuDataService, $stateParams) {
  var itemsX = this;
  console.log($stateParams);
  itemsX.stuff = MenuDataService.getItemsForCategory($stateParams.itemId);
  itemsX.categoryItems = itemsX.stuff.value;
  console.log(itemsX.categoryItems);
}

})();
