angular.module('colibri.controllers', [])

.controller('ApplicationController', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('TimesheetController', function($scope,$http,$ionicPopup,$timeout) {
  $scope.weekday = "Wednesday";
  $scope.date = "21 Jun";
  $scope.timesheet = [];
  $scope.TotalTime = 0;
  $http.get("data/timesheet.json").success(function(data){
    $scope.timesheet = data;
    $scope.TotalTime = CalculaterTime($scope.timesheet);
  }); 
  $http.get("data/jobtask.json").success(function(data){
    $scope.jobtask = data;
    var zzz = $scope.jobtask;
    console.log(zzz);
  });
  function CalculaterTime(timesheet){
    var totalTime = 0;
    for(var i = 0; i < timesheet.length; i++){
        totalTime += parseFloat(timesheet[i].Duration, 10);
    }
    return totalTime;
  }
  $scope.addTime = function(){
    var myPopup = $ionicPopup.show({
      template: '<label>Job</label><input type="jobid" ng-model="newJob"><label>Task</label><input type="Taskid" ng-model="newTask"><label>Duration:</label><input type="Taskid" ng-model="newDuration"><label>Notes:</label><input type="Taskid" ng-model="newNotes">',
     title: 'Add a time',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
          $scope.timesheet.push({
            "Id":66171,
            "JobId" : 3342,
            "Date":"02/02/2015",
            "TaskTypeId":27,
            "Notes":"Colibri mobile app design",
            "jobTask" : "Frontend Developed",
            "jobTime" : "3.25",
            "Duration":2.5,
            "BillableHour":null,
            "UserId":41,
            "Action":null,
            "Result":null,
            "Info":null
          })
        }
       }
     ]
   });
  }
});
