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
        items: '<'
      },
    };

    return ddo
  }

  narrowItDownController.$inject = ['MenuSearchService'];
  function narrowItDownController(MenuSearchService) {
    var menu = this;
    menu.page = "";
    menu.input = "";
    menu.displayResult = [];
    menu.searchX = function(name) {
      menu.displayResult = MenuSearchService.FoundItems(menu.input, name);
      menu.displayResult.$promise
      .then(function(foundArray) {
        menu.page = foundArray;
        console.log(menu.page[0]);
        console.log(menu.displayResult);
      }).catch(function(errorResponse) {
        console.log("ERROR");
        console.log(errorResponse);
      });
    };
  }



  MenuSearchService.$inject = ['$http', '$q'];
  function MenuSearchService($http, $q) {
    var service = this;
    service.getMatchedMenuItems = function(name, searchTerm) {
      var deferred = $q.defer();
      var foundItems = [];
      var result =  $http({
        method: "GET",
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json'),
        params: {
          category: name
        }
      }).then(function (result) {
          var items = result.data;
          for (var i = 0; i < items.menu_items.length; i++) {
            if (searchTerm === ""){
              deferred.reject("Please enter search term");
              i = items.menu_items.length;
            }
            else if (items.menu_items[i].name.toLowerCase().indexOf(searchTerm.toLowerCase()) ==! -1){
                foundItems.push(items.menu_items[i].name)
                deferred.resolve(foundItems);
            }else {
              console.log("doesn't match search");
            }
          };

      });
      return deferred.promise;
    };
    service.FoundItems = function (searchTerm, name) {
    var foundArray = [];
    var searchPromise = service.getMatchedMenuItems(name, searchTerm);
    foundArray.$promise = searchPromise
      .then(function (foundItems) {
        return $q.resolve(foundItems)
    })
      .catch(function (errorResponse) {
        return $q.reject(errorResponse);
    });
    return foundArray;
};
  };
})();
