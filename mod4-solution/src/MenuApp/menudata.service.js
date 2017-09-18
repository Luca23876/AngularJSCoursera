(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', '$q', '$timeout'];
  function MenuDataService($http, $q, $timeout) {
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
    service.getItemsForCategory = function(categoryShortName) {
      var deferred = $q.defer();
      var itemsResult =  $http({
        method: "GET",
        url: (' https://davids-restaurant.herokuapp.com/menu_items.json?category='),
        params: {
          category: categoryShortName
        }
      });
      $timeout(function () {
        deferred.resolve(itemsResult);
      }, 800);
      console.log(deferred.promise);
      return deferred.promise;
    }
  };
})();
