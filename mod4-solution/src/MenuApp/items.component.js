(function () {
'use strict'

angular.module('MenuAppX')
.component('itemsX', {
  templateUrl: 'src/MenuApp/templates/items.template.html',
  bindings: {
    itemsR: '<'
  }
});

})();
