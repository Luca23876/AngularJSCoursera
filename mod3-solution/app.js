(function () {
  'use strict';

  angular.module('narrowDownMenuApp', [])
  .controller('narrowItDownController', narrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('searchResult', searchResultDirective);

  function searchResultDirective() {
    var ddo = {
      scope: {
        display: '<'
      },
      templateUrl: 'searchResult.html',
      // // controller: searchResultDirectiveController,
      // controllerAs: 'list',
      // bindToController: true
    };

    return ddo
  }
  // searchResultDirectiveController.$inject = ['MenuSearchService'];
  // function searchResultDirectiveController(MenuSearchService) {
  //   var result = this;
  //   var displayResult = [];
  //   result.display = function () {
  //       displayResult = MenuSearchService.getFoundItems();
  //       console.log(displayResult);
  //   };
  // };

  narrowItDownController.$inject = ['MenuSearchService'];
  function narrowItDownController(MenuSearchService) {
    var menu = this;
    menu.input = "";
    menu.displayResult = [];
    menu.searchX = function(name) {
      MenuSearchService.FoundItems(menu.input, name);
    };
    menu.display = MenuSearchService.getFoundItems(menu.displayResult);
   console.log(menu.display);
  }



  MenuSearchService.$inject = ['$http', '$q'];
  function MenuSearchService($http, $q) {
    var foundArray = [];
    var message = "";
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
              deferred.reject(["Please enter search term"]);
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
      var searchResult = service.getMatchedMenuItems(name, searchTerm);
      $q.all([searchResult]).
      then(function (foundItems) {
         foundArray = foundItems;
      }).
      catch(function (errorResponse) {
         message = errorResponse;
         console.log(message);
      });
    };
    service.getFoundItems = function (displayArray) {
      if (foundArray.length ==! 0) {
        displayArray = foundArray;
        console.log("sjsfkj");
      }else {
        displayArray = message;
      };
      return displayArray
    };
  };
})();
