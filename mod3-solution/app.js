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
    menu.page = [];
    menu.nPage = [];
    menu.input = "";
    menu.displayResult = [];
    menu.searchX = function(name) {
      menu.displayResult = MenuSearchService.FoundItems(menu.input, name);
      menu.displayResult.$promise
      .then(function(foundArray) {
        menu.page = foundArray;
        menu.nPage = [];
        return menu.page;
      }).catch(function(errorResponse) {
        console.log("ERROR");
        menu.nPage = errorResponse;
        menu.page = [];
        return menu.nPage;
      });
      menu.removeItem;
    };
    menu.removeItem = function (itemIndex, items) {
      MenuSearchService.removeItem(itemIndex, menu.page);
    };
  }



  MenuSearchService.$inject = ['$http', '$q'];
  function MenuSearchService($http, $q) {
    var service = this;
    service.getMatchedMenuItems = function(name, searchTerm, short_name, description) {
      var deferred = $q.defer();
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
            if (searchTerm === "" || items.menu_items[i].name.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1){
              if (i === 218 || searchTerm === "") {
                deferred.reject(["Nothing found"]);
              }else {
              }
            }
            else if (items.menu_items[i].name.toLowerCase().indexOf(searchTerm.toLowerCase()) ==! -1){
                foundItems.push({name: items.menu_items[i].name, shortName: items.menu_items[i].short_name, description: items.menu_items[i].description})
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
    service.removeItem = function (itemIndex, items) {
      items.splice(itemIndex, 1);
    };
  };
})();
