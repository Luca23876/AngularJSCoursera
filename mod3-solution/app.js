(function () {
  'use strict';

  angular.module('narrowDownMenuApp', [])
  .controller('narrowItDownController', narrowItDownController)
  .service('MenuSearchService', MenuSearchService);
  .directive('searchResult', searchResultDirective);

  function searchResultDirective() {
    var ddo = {
      templateUrl: 'searchResult.html'
    };

    return ddo
  }

  narrowItDownController.$inject = ['MenuSearchService'];
  function narrowItDownController(MenuSearchService) {
    var menu = this;
    menu.input = "";
    menu.message = "";
    menu.foundArray = [];
    menu.searchX = function(name) {
      MenuSearchService.getMatchedMenuItems(name, menu.input);
      MenuSearchService.getFoundItems(menu.foundArray, menu.message);
    };
    var promise = MenuSearchService.getMatchedMenuItems();
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
              result.message = "Please enter search term"
              deferred.reject(result);
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
    }
    service.getFoundItems = function (foundArray, message) {
      var searchResult = MenuSearchService.getMatchedMenuItems(name, searchTerm);
      $q.all([searchResult]).
      then(function (foundItems) {
        var foundArray = foundItems;
      }).
      catch(function (errorResponse) {
        var message = errorResponse.message;
      });
    };
  };
})();
