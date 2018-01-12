let app = angular.module('websiteStatistics',[]);

app.controller('websiteStatisticsController',
	['$scope', 'statisticsFactory', 'statisticsService', 'functionsFactory',
	function($scope, statisticsFactory, statisticsService, fn) {

	$scope.statistics = {};
 	$scope.statistics.title = 'Website statistics';
 	$scope.statistics.visitors = [];
 	$scope.statistics.uniqueVisitors = [];
 	$scope.statistics.todaysVisitors = [];

 	statisticsService.getAllVisitors().then(function(response) {
 		response.data.forEach(function(data) {
 			let visitor = new statisticsFactory.visitor(data);
 			$scope.statistics.visitors.push(visitor);
 		})
		
		$scope.statistics.uniqueVisitors = fn.removeDuplicatesBy(x => x.formattedIp, $scope.statistics.visitors);
		
		$scope.statistics.todaysVisitors = fn.getVisitorsByDay('day', fn.getFormattedDate(), $scope.statistics.visitors);
 		$scope.statistics.todaysUniqueVisitors = fn.removeDuplicatesBy(x => x.formattedIp, $scope.statistics.todaysVisitors);

 		//console.log($scope.statistics.visitors);
 		console.log($scope.statistics.todaysVisitors);
 	});

}]);
