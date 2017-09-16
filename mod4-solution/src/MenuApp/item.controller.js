(function () {
'use strict';

angular.module('MenuAppX')
.controller('itemsXController', itemsXController);


itemsXController.$inject = ['MenuDataService', '$stateParams'];
function itemsXController(MenuDataService, $stateParams) {
  var itemsX = this;
  itemsX.categoryItems = [];
  MenuDataService.getItemsForCategory($stateParams.itemId).then(function functionName(itemsResult) {
    itemsX.categoryItems = itemsResult.data.menu_items;
  })
}

})();
