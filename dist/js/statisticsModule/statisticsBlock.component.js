(function(){
	let app = angular.module('websiteStatistics');

	class VisitorsController {
		constructor() {
			this.treeToggled = false;
		}
		toggleTree() {
			this.treeToggled = !this.treeToggled;
		}
	}

	app.component('statisticsBlock', {
		templateUrl: 'js/statisticsModule/statisticsBlock.component.html',
		bindings:{
			visitors: '<'
		},
		controller: VisitorsController
	});
}());