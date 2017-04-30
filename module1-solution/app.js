(function (){
  'use strict';
  var module = angular.module('LunchCheck', []);
  module.controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.items = "";
    $scope.checkResult = "";
    $scope.checkResultStyle = "";
    $scope.checkIfTooMuch = checkIfTooMuch;

    function checkIfTooMuch(){
      var itemsArray = $scope.items.split(',');
      var itemsCount = 0;

      itemsArray.forEach(function (item){
        item = item.trim();
        if(item != null && item != ""){ // NOT considering empty items
          itemsCount++;
        }
      });

      if(itemsCount == 0) {
          $scope.checkResult = "Please enter data first";
          $scope.checkResultStyle = "alert alert-danger";
      } else if (itemsCount <= 3) {
          $scope.checkResult = "Enjoy!";
          $scope.checkResultStyle = "alert alert-success";
      } else {
          $scope.checkResult = "Too much";
          $scope.checkResultStyle = "alert alert-success";
      }

    }
  }
})();
