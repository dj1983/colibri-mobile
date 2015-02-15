angular.module('colibri', ['ionic', 'colibri.controllers','colibri.filters'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'ApplicationController'
    })
    .state('app.timesheet', {
      url: "/timesheet",
      views: {
        'menuContent': {
          templateUrl: "templates/timesheet.html",
          controller: 'TimesheetController'
        }
      }
    })
    .state('app.timesheetbydate', {
      url: "/timesheet/:date",
      views: {
        'menuContent': {
          templateUrl: "templates/timesheet.html",
          controller: 'TimesheetController'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/timesheet');
});
