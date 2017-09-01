(function() {
  'use strict'
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state(
      url: '/',
      templateUrl: 'src/<MenuApp/templates/home.template.html'
    )
  };
})();
