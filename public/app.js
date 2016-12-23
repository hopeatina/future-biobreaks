
var biobreaksapp = angular.module('biobreaksapp', ['chart.js']);

biobreaksapp.controller('FutureController', function FutureController($scope){
  $scope.test = "TEST 1";
  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = {boom: null};
  $scope.data.selectedGraphData = [
    [65, 59, 80, 81, 56, 55, 40]
  ];
  $scope.data.boom = $scope.data.selectedGraphData;
  console.log(typeof(parseInt(parseInt(Math.floor(Math.random()*100)))), typeof($scope.data.selectedGraphData));
  function newArray(){
    var randobj = [[]];
    for( var i = 0; i < 7; i++){
      randobj[0].push(Math.floor(Math.random()*100));
      // randobj[1].push(Math.floor(Math.random()*100));
    }
    return randobj;
  }
  var obj = newArray();
  $scope.graphOptions = [
    {name: "OPTION 1", value: newArray()},
    {name: "OPTION 3", value: newArray()}
  ];

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.updateGraph = function (value) {
    console.log(value[0]);
    if (value == 0) {
      $scope.data.selectedGraphData = newArray();
    }
    else {
      $scope.data.selectedGraphData = $scope.data.boom;
    }
    console.log(typeof($scope.data.selectedGraphData),$scope.data.selectedGraphData);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };
});