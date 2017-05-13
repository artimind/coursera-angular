(function(){
  'use strict';

  var module = angular.module('ShoppingListCheckOff', []);
  module.controller('ToBuyController', ToBuyController);
  module.controller('AlreadyBoughtController', AlreadyBoughtController);
  module.service('shoppingListCheckOffService', ShoppingListCheckOffService);

  function initToBuyList(){
    var toBuyList = [
      {name: "cookie(s)", quantity: 12},
      {name: "apple(s)", quantity: 10},
      {name: "orange(s)", quantity: 6},
      {name: "banana(s)", quantity: 20},
      {name: "book(s)", quantity: 30}
    ];

    return toBuyList;
  }

  function ShoppingListCheckOffService(){
    var service = this;

    var toBuyList = initToBuyList();
    var boughtList = [];

    service.bought = function(itemIndex){
      var boughtItem = toBuyList[itemIndex];
      toBuyList.splice(itemIndex, 1);
      boughtList.push(boughtItem);
    };

    service.getToBuyList = function(){
      return toBuyList;
    };

    service.getBoughtList = function(){
      return boughtList;
    };
  }

  ToBuyController.$inject = ['shoppingListCheckOffService'];
  function ToBuyController(shoppingListCheckOffService){
    var tbCtr = this;

    tbCtr.toBuyList = shoppingListCheckOffService.getToBuyList();
    tbCtr.bought = function(itemIndex){
      shoppingListCheckOffService.bought(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['shoppingListCheckOffService'];
  function AlreadyBoughtController(shoppingListCheckOffService){
    var albCtr = this;

    albCtr.boughtList = shoppingListCheckOffService.getBoughtList();
  }

})();
