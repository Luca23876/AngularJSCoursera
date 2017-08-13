(function () {
  'use strict';

  angular.module('narrowDownMenuApp', [])
  .controller('narrowItDownController', narrowItDownController)
  .service('MenuSearchService', MenuSearchService);

  narrowItDownController.$inject = ['MenuSearchService'];
  function narrowItDownController(MenuSearchService) {
    var menu = this;
    menu.input = "";
    menu.searchX = function(name) {
      MenuSearchService.getMatchedMenuItems(name, menu.input);
    };
    //var promise = MenuSearchService.getFoundItems();
  }
  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;
    service.getMatchedMenuItems = function(name, searchTerm) {
      var foundItems = [];
      var enterSearch = "Please enter search Term";
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
              console.log("Please enter search Term");
              i = items.menu_items.length;
            }
            else if (items.menu_items[i].name.toLowerCase().indexOf(searchTerm.toLowerCase()) ==! -1){
                foundItems.push(items.menu_items[i].name)
                console.log(foundItems);
            }else {
              console.log("doesn't match search");
            }
          };

      });
    }
    // service.getFoundItems = function () {
    //   return foundItems;
    // }
  }
})();
