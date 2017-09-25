(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath', '$q'];
function MenuService($http, ApiPath, $q) {
  var service = this;
  var info = [];
  var items = [];

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
  service.addInfo = function (fName, lName, email, phone) {
    info.push(fName, lName, email, phone);
  };
  service.getItemShortName = function () {
    var d = $http.get(ApiPath + '/menu_items.json').then(function (d) {
        for (var i = 0; i < d.data.menu_items.length; i++) {
          items.push(d.data.menu_items[i].short_name)
        }
    });
  };
  service.checkDish = function (id) {
    for (var q = 0; q < items.length;q++) {
      if (id === items[q]) {
        var thing = $http.get(ApiPath + '/menu_items/' + id + '.json').then(function (thing) {
          info.push(thing.data);
        });
        return true;
      }else if(q === 219){
        return false;
      }
    };
    // if (q === 221) {
    //   return true;
    // }else {
    //   return false;
    // }
  }
  service.getInfo = function () {
    return info;
  }

}



})();
