(function(){
	let app = angular.module('websiteStatistics',[]);

	app.controller('websiteStatisticsController',
		['statisticsFactory', 'functionsFactory',
		function(statisticsFactory, fn) {

		let ctrl = this;
		
		const apiUrl = "http://mirilyu.com/api/getStatistics";

	 	ctrl.title = 'Website statistics';
	 	ctrl.visitors = {
		 	title: "Total",
		 	total: [],
		 	unique: []
	 	};
	 	ctrl.todaysVisitors = {
		 	title: "Today",
		 	total: [],
		 	unique: []
	 	};

	 	statisticsFactory.fetchData(apiUrl).then(function(response) {
	 		response.data.forEach((data) => {
	 			let visitor = new statisticsFactory.visitor(data);
	 			ctrl.visitors.total.push(visitor);
	 		})
			
			ctrl.visitors.unique = fn.removeDuplicatesBy(x => x.formattedIp, ctrl.visitors.total);
			ctrl.todaysVisitors.total = fn.getVisitorsByDay('day', fn.getFormattedDate(), ctrl.visitors.total);
	 		ctrl.todaysVisitors.unique = fn.removeDuplicatesBy(x => x.formattedIp, ctrl.todaysVisitors.total);
	 	});

	}]);
}());
