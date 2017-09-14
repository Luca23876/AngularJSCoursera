(function () {
'use strict';

angular.module('MenuAppX')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/MenuApp/template/home.template.html'
  })
  .state('category', {
    url: '/menuCategory',
    templateUrl: 'src/MenuApp/template/categories.template.html',
    controller: 'categoriesXController as categoriesX',
    resolve: {
      categoriesResult: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategory();
      }]
    }
  })

  .state('items', {
    url: '/menuItems/{itemId}',
    templateUrl: 'src/MenuApp/template/items.template.html',
    controller: 'itemsXController as itemsX',
    resolve: {
      itemsResult: ['MenuDataService', function (MenuDataService, itemId) {
        return MenuDataService.getItemsForCategory(itemId);
      }]
    }
  })
}
})();
