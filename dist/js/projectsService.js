(function (){
	var app = angular.module('projectsDashboard');

	var projectsService = function($http) {
		
		var getAllProjects = function() {
			return $http.get('http://localhost:5000/admin/getProjects');
		}

		return {
			getAllProjects: getAllProjects
		}
	}

	app.service('projectsService', projectsService);
}())