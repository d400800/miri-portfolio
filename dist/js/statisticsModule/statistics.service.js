(function(){
	let app = angular.module('websiteStatistics');

	app.service('statisticsService', ['$http', function($http) {
		const apiUrl = "http://mirilyu.com/api/getStatistics";

		let getAllVisitors = () => {
			return $http.get(apiUrl);
		}

		return {
			getAllVisitors: getAllVisitors
		}
	}]);
}());