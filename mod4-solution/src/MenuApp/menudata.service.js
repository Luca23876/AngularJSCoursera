(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('categoryBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");

  MenuDataService.$inject = ['$http', '$q', '$timeout','categoryBasePath'];
  function MenuDataService($http, $q, $timeout, categoryBasePath) {
    var service = this;

    service.getAllCategory = function() {
      var deferred = $q.defer();
      var categoriesResult =  $http({
        method: "GET",
        url: ('https://davids-restaurant.herokuapp.com/categories.json'),
      });
      $timeout(function () {
        deferred.resolve(categoriesResult);
      }, 800);
      return deferred.promise;
    }
    service.getItemsForCategory = function(itemId) {
      var deferred = $q.defer();
      console.log(itemId);
      var itemsResult =  $http({
        method: "GET",
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category=L'),
      });
      $timeout(function () {
        deferred.resolve(itemsResult);
      }, 800);
      console.log(deferred.promise);
      return deferred.promise;
    }
  };
})();
