(function () {
  'use strict'
  angular.module('MenuData', [])
  .service('MenuDataService', []);

  MenuDataService.$inject = ['$http'];
  MenuDataService = function($http) {
    var service = this;
    service.getAllCategory = function() {
      var categoriesResult =  $http({
        method: "GET",
        url: ('https://davids-restaurant.herokuapp.com/categories.json'),
      });
      return categoriesResult;
    }
    service.getItemsForCategory = function(categoryShortName) {
      var itemsResult =  $http({
        method: "GET",
        url: (' https://davids-restaurant.herokuapp.com/menu_items.json?category='),
        params: {
          category: categoryShortName
        }
      });
      return itemsResult;
    }
  };

});
