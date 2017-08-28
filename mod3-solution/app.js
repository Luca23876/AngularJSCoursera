(function () {
  'use strict';

  angular.module('narrowDownMenuApp', [])
  .controller('narrowItDownController', narrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('searchResult', searchResultDirective);

  function searchResultDirective() {
    var ddo = {
      templateUrl: 'searchResult.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
    };

    return ddo
  }

  narrowItDownController.$inject = ['MenuSearchService'];
  function narrowItDownController(MenuSearchService) {
      var menu = this;
      menu.input = "";
      menu.removeItem;
      menu.searchX = function(name) {
        menu.displayResult = MenuSearchService.getMatchedMenuItems(menu.input, name);
        return menu.displayResult;
      };
      menu.removeItem = function (itemIndex) {
        MenuSearchService.removeItem(itemIndex, menu.displayResult);
      };
  };



  MenuSearchService.$inject = ['$http', '$q'];
  function MenuSearchService($http, $q) {
    var service = this;
    service.getMatchedMenuItems = function(searchTerm, name, short_name, description) {
      var foundItems = [];
      var result =  $http({
        method: "GET",
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json'),
        params: {
          category: name,
          category: short_name,
          category: description
        }
      }).then(function (result) {
          var items = result.data;
          for (var i = 0; i < items.menu_items.length; i++) {
            if (items.menu_items[i].name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 && searchTerm.length > 0){
              foundItems.push({name: items.menu_items[i].name, shortName: items.menu_items[i].short_name, description: items.menu_items[i].description});
            }else{
              console.log("doesn't match search");
            };
          };
      });
      return foundItems;
    };
    service.removeItem = function (itemIndex, items) {
      items.splice(itemIndex, 1);
    };
  };
})();
