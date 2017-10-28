var app = angular.module('projectsDashboard',[]);

app.controller('dashboardAppController',
	['$scope', '$http', 'Project', 'projectsService',
	function($scope, $http, Project, projectsService) {
	
 	$scope.title = 'List of projects';
 	$scope.projects = [];

 	projectsService.getAllProjects().then(function(response) {
 		response.data.forEach(function(data) {
 			var project = new Project(data);
 			$scope.projects.push(project);
 		})
 		console.log($scope.projects);
 	});

}]);

app.factory('Project', function() {
	var Project = function(data) {
		for(var k in data) {
			this[k] = data[k];
		}
		this.isEditing = false;
		this.mainImg = '/img/'+this.banner;
	}

	Project.prototype.setToEdit = function() {
		this.isEditing = !this.isEditing;
	}

	return Project;
})