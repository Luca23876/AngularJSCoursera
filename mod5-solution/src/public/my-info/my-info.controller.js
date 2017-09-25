(function () {
  'use strict';

angular.module('common')
.controller('infoController', infoController);

infoController.$inject = ['MenuService'];
function infoController(MenuService) {
  var info = this;
  info.info = MenuService.getInfo();
  info.fName = info.info[0];
  info.lName = info.info[1];
  info.email = info.info[2];
  info.phone = info.info[3];
  if (info.info.length > 0) {
    console.log(info.info[4]);
    info.menuItemShortName = info.info[4].short_name;
    info.menuItemName = info.info[4].name;
    info.menuItemDescription = info.info[4].description;
  }
}

})();
