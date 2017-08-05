(function () {
  'use strict';

  var data = [];
  var shoppingList = [
    {
      name: "Donuts",
      quantity: "10"
    },
    {
    name: "Cookies",
    quantity: "10"
    },
    {
    name: "Drinks",
    quantity: "10"
    },
    {
    name: "Shrimp",
    quantity: "10"
    },
    {
    name: "Ice Cream tub",
    quantity: "100"
    }
  ];
  console.log(data);
  angular.module('shoppingListCheckOffApp', [])
  .controller('toBuyListController', toBuyListController)
  .controller('boughtListController', boughtListController)
  .service('shoppingListService', shoppingListService);

  toBuyListController.$inject = ['shoppingListService'];
  function toBuyListController(shoppingListService){
    var buy = this;
    buy.shoppingList = shoppingList;
    buy.shoppingListBought = function(itemIndex){
      shoppingListService.dataTransfer(buy.shoppingList[itemIndex].name, buy.shoppingList[itemIndex].quantity);
      shoppingListService.remove(itemIndex);
    };
  }
  boughtListController.inject = ['shoppingListService'];
  function boughtListController(shoppingListService){
    var bought = this;
    bought.data = shoppingListService.getData();
    console.log(bought.data);
  }

  function shoppingListService(){
    var service = this;
    service.dataTransfer = function(itemName, quantity){
      var item = {
        name: itemName,
        quantity: quantity
      };
      data.push(item);
    }
    service.remove = function (itemIndex) {
      shoppingList.splice(itemIndex, 1);
    };
    service.getData = function() {
      return data;
    };

  };
})();
