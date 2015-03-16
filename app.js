<<<<<<< HEAD
  //TESTING AND SETUP========================================
=======
//TESTING AND SETUP========================================
>>>>>>> cb92312a76c8f257d0c4c042940e480db396326b
//=========================================================
console.log('app.js loaded');

var hexGame = angular.module('hexGame', []);

//TEST DIRECTIVES (MUST BE OUTSIDE OF CONTROLLER)==========

hexGame.directive('myDirective', function () {
<<<<<<< HEAD
  return {template: 'This is a template from myDirective'};
=======
  return {template: 'This is a template from myDirective'}
>>>>>>> cb92312a76c8f257d0c4c042940e480db396326b
});

//Trying to make this load the my-customer.html template
//It does not want
<<<<<<< HEAD
hexGame.directive('myCustomer', function () {
=======
hexGame.directive('myCustomer', function() {
>>>>>>> cb92312a76c8f257d0c4c042940e480db396326b
  return {
    templateUrl: 'my-customer.html'
  };
});

//=========================================================

hexGame.controller('HexGameController', function ($scope) {
  console.log('HexGameController is loaded');

  $scope.scopeTest = function () {
    console.log('$scope functions are working');
  }
  $scope.scopeTest();
  $scope.userName = 'Alex';
  $scope.pictureUrl = 'http://i.huffpost.com/gen/1860407/images/o-BLACK-FOOTED-CAT-KITTENS-facebook.jpg';
  $scope.showPictureBool = false;

  $scope.showPicture = function () {
    if ($scope.showPictureBool == false) {
      $scope.showPictureBool = true;
    } else {
      $scope.showPictureBool = false;
    }
  }

//=========================================================
//=========================================================

//SCOPE VARIABLES==========================================
//=========================================================
  $scope.board = [];
  $scope.boardSize = 10;

//SCOPE FUNCTOINS==========================================
//=========================================================
  $scope.createBoard = function () {
    for (row = 1; row <= $scope.boardSize; row++) {
      for (col = 1; col <= $scope.boardSize; col++) {
        console.log(row + '-' + col);
        if (row % 2 == 0) {
          console.log('even # row');
        }
      }
    }
  }

  $scope.createBoard();
});

hexGame.directive('createHex', function () {
  return {
    templateUrl: 'create-hex.html'
  };
});