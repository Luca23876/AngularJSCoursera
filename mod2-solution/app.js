()(function(){
module.angular("shoppingListCheckOff", shoppingListCheckOff)

.controller("toBuyList", toBuyList)
.controller("boughtList",boughtList)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService)

toBuyList.$inject(ShoppingListCheckOffService, '$scope');
boughtList.$inject(ShoppingListCheckOffService, '$scope');
function toBuyList(ShoppingListCheckOffService, $scope){


};
function boughtList(ShoppingListCheckOffService, $scope){
$scope.boughtItems = []

};
}):
