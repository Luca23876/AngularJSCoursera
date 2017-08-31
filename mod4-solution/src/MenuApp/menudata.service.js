(function () {
  'use strict'
  angular.module('MenuData', [])
  .service('MenuDataService', []);

  MenuDataService.$inject = ['$http'];
  MenuDataService = function($http) {
    var service = this;
    service.getAllCategory = function() {
      var result =  $http({
        method: "GET",
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json'),
      });
      return result;
    }
    service.getItemsForCategory = function(categoryShortName) {
      var result =  $http({
        method: "GET",
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json'),
        params{
          category: categoryShortName
        }
      });
      return result;
    }
  };

});
