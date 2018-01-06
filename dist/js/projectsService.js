(function (){
	var app = angular.module('projectsDashboard');

	app.service('projectsService', ['$http', function($http) {
		
		var getAllProjects = function() {
			return $http.get('http://localhost:5000/api/getProjects');
		}

		return {
			getAllProjects: getAllProjects
		}

		var postProject = function() {
			$http.post('/http://localhost:5000/api/postProject', data);
		}
	}]);
}())