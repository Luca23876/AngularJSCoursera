(function () {
'use strict'

angular.module('MenuAppX')
.component('MenuAppX', {
  templateUrl: 'src/MenuApp/templates/items.template.html',
  bindings: {
    itemsR: '<'
  }
});

})();
