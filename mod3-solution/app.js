(function(){
  'use strict'

  angular.module('narrowDownMenuApp', [])
  .controller('narrowItDownController ', narrowItDownController )
  .service('MenuSearchService', MenuSearchService);

  narrowItDownController.$inject = ['MenuSearchService'];
  function narrowItDownController(MenuSearchService) {
    var menu = this;
    menu.input = "";
    menu.search = function() {
      MenuSearchService.getMatchedMenuItems(searchTerm);
    }
  }
  MenuSearchService.$inject = ['$https'];
  function MenuSearchService($https) {
    var service = this;
    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: "GET",
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json')
      }).then(function (result) {
          console.log(result);
        var foundItems

        // return processed items
        return foundItems;
      });
    }
  }
})();
