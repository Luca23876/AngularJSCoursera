(function () {
'use strict';

angular.module('MenuAppX')
.controller('itemsXController', itemsXController);


itemsXController.$inject = ['MenuDataService', 'itemsResult'];
function itemsXController(MenuDataService, itemsResult) {
  var itemsX = this;
  itemsX.categoryItems = itemsResult.data.menu_items;
}

})();
