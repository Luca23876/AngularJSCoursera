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
    templateUrl: 'src/MenuApp/template/categories.template.html'
  })
  .state('items', {
    url: '/menuItems',
    templateUrl: 'src/MenuApp/template/items.template.html'
  })
}
})();
