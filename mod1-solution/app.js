(function () {
'use strict';

  angular.module('lunchCheck', [])

  .controller('itemNumCheckController', itemNumCheckController);
  itemNumCheckController.$injector = ['$scope'];
  function itemNumCheckController($scope) {
    $scope.name = "";
    $scope.result = "";
    $scope.itemCalculator = function () {
      var str = $scope.name;
      var strLenght = str.split(",");
      if(strLenght.length <= 3 && strLenght.length > 0){
        $scope.result = "enjoy";
      }else if (strLenght.length > 3) {
        $scope.result = "too much";
      }else{
        $scope.result = "Please enter Data";
      };
      console.log(strLenght.length);
    };
  };

})();
