(function (){
	var app = angular.module('projectsDashboard');

	var projectsService = function($http) {
		
		var getAllProjects = function() {
			return $http.get('http://localhost:5000/api/getProjects');
		}

		return {
			getAllProjects: getAllProjects
		}

		var postProject = function() {
			$http.post('/http://localhost:5000/api/postProject', data);
		}
	}

	app.service('projectsService', projectsService);
}())