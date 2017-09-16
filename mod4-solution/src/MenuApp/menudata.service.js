(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('categoryBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");

  MenuDataService.$inject = ['$http', '$q', 'categoryBasePath'];
  function MenuDataService($http, $q, categoryBasePath) {
    var service = this;

    service.getAllCategory = function() {
      var deferred = $q.defer();
      var categoriesResult =  $http({
        method: "GET",
        url: ('https://davids-restaurant.herokuapp.com/categories.json'),
      });
      deferred.resolve(categoriesResult);
      return deferred.promise;
    }
    service.getItemsForCategory = function(itemId) {
      var itemsResult =  $http({
        method: "GET",
        url: (categoryBasePath + itemId),
      })
      return itemsResult;
    }
  };
})();
