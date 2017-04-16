// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ui.router'])

.controller('MoveCtrl', function($scope, $state, $location, $ionicPopup, $rootScope) {

  $scope.startPage = function(goToState) {
    //console.log("hello");
    $state.transitionTo(goToState);
  }

  $scope.showPopup = function(goToState){
    var alertPopup = $ionicPopup.alert({
      //title: 'Feed Me!',
      template: 'Its time for me to brush my teeth!',
      okText: 'Feed Me!'
    });

    alertPopup.then(function(res) {
      $state.transitionTo(goToState);

    });

  }


})




.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
     // Turn off back button text
     $ionicConfigProvider.backButton.previousTitleText(false);
     */

    $stateProvider.state('app', {
        url: '/app',
        templateUrl: 'brush8.html',
        controller: 'MoveCtrl'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'login.html',
        controller: 'MoveCtrl'
      })

      .state('brush1', {
        url: '/brush1',
        templateUrl: 'brush1.html',
        controller: 'MoveCtrl'
      })

      .state('brush2', {
        url: '/brush2',
        templateUrl: 'brush2.html',
        controller: 'MoveCtrl'
      })

      .state('brush3', {
        url: '/brush3',
        templateUrl: 'brush3.html',
        controller: 'MoveCtrl'
      })

      .state('brush4', {
        url: '/brush4',
        templateUrl: 'brush4.html',
        controller: 'MoveCtrl'
      })

      .state('brush5', {
        url: '/brush5',
        templateUrl: 'brush5.html',
        controller: 'MoveCtrl'
      })

      .state('brush6', {
        url: '/brush6',
        templateUrl: 'brush6.html',
        controller: 'MoveCtrl'
      })

      .state('brush7', {
        url: '/brush7',
        templateUrl: 'brush7.html',
        controller: 'MoveCtrl'
      })

      .state('brush8', {
        url: '/brush8',
        templateUrl: 'brush8.html',
        controller: 'MoveCtrl'
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app');
  })

;

