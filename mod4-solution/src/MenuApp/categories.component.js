(function () {
'use strict';

angular.module('MenuAppX')
.component('categoriesX', {
  templateUrl: 'src/MenuApp/template/categories.template.html',
  bindings: {
    categoriesResult: '<'
  }
});

})();
