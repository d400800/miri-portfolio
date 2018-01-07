var app = angular.module('websiteStatistics',[]);

app.controller('websiteStatisticsController',
	['$scope', 'statisticsFactory', 'statisticsService',
	function($scope, statisticsFactory, statisticsService) {
	
	const isDev = false;
	
	function removeDuplicatesBy(keyFn, array) {
		var mySet = new Set();
		return array.filter(function(x) {
	    	var key = keyFn(x), isNew = !mySet.has(key);
	    	if (isNew) mySet.add(key);
	    	return isNew;
		});
	};

	$scope.statistics = {};
 	$scope.statistics.title = 'Website statistics';
 	$scope.statistics.visitors = [];
 	$scope.statistics.uniqueVisitors = [];

 	if(!isDev) {
	 	statisticsService.getAllVisitors().then(function(response) {
	 		response.data.forEach(function(data) {
	 			var visitor = new statisticsFactory(data);
	 			$scope.statistics.visitors.push(visitor);
	 		})
	 		console.log($scope.statistics.visitors);
	 	});
	 } else {
	 	var visitorsStub = statisticsService.getAllVisitors_stub();
	 	visitorsStub.forEach(function(data) {
	 		var visitor = new statisticsFactory(data);
	 		$scope.statistics.visitors.push(visitor);
	 	});
	 	//console.log($scope.statistics.visitors);
	 }

	$scope.statistics.uniqueVisitors = removeDuplicatesBy(x => x.formattedIp, $scope.statistics.visitors);
	console.log($scope.statistics.uniqueVisitors);

}]);

var statisticsFactory = function () {
	var Visitor = function(data) {
		for(var k in data) {
			this[k] = data[k];
		}
		this.formattedIp = this.ip.replace('::ffff:', "");
	}

	return Visitor;
};
app.factory('statisticsFactory', statisticsFactory);

var statisticsStub = [
  {
    "_id": "5a5144c10db1e014ae728287",
    "ip": "::ffff:143.255.220.148",
    "date": "2018-01-06T21:50:57.684Z"
  },
  {
    "_id": "5a5144c10db1e014ae728287",
    "ip": "::ffff:143.255.220.148",
    "date": "2018-01-06T21:50:57.684Z"
  },
  {
    "_id": "5a5144c10db1e014ae728287",
    "ip": "::ffff:143.255.220.148",
    "date": "2018-01-06T21:50:57.684Z"
  },
  {
    "_id": "5a5144c10db1e014ae728287",
    "ip": "::ffff:143.255.220.148",
    "date": "2018-01-06T21:50:57.684Z"
  },
  {
    "_id": "5a5144c10db1e014ae728287",
    "ip": "::ffff:143.255.220.148",
    "date": "2018-01-06T21:50:57.684Z"
  },
  {
    "_id": "5a514e510db1e014ae728288",
    "ip": "::ffff:178.118.174.200",
    "date": "2018-01-06T22:31:45.608Z"
  },
  {
    "_id": "5a51820c0db1e014ae728289",
    "ip": "::ffff:203.41.204.50",
    "date": "2018-01-07T02:12:28.561Z"
  },
  {
    "_id": "5a5199250db1e014ae72828a",
    "ip": "::ffff:138.36.234.4",
    "date": "2018-01-07T03:51:01.177Z"
  },
  {
    "_id": "5a51a76c0db1e014ae72828b",
    "ip": "::ffff:196.52.43.60",
    "date": "2018-01-07T04:51:56.879Z"
  },
  {
    "_id": "5a51a85f0db1e014ae72828c",
    "ip": "::ffff:86.197.72.112",
    "date": "2018-01-07T04:55:59.859Z"
  },
  {
    "_id": "5a51b4820db1e014ae72828d",
    "ip": "::ffff:65.99.177.125",
    "date": "2018-01-07T05:47:46.639Z"
  },
  {
    "_id": "5a51b4820db1e014ae72828d",
    "ip": "::ffff:65.99.177.125",
    "date": "2018-01-07T05:47:46.639Z"
  },
  {
    "_id": "5a51b4820db1e014ae72828d",
    "ip": "::ffff:65.99.177.125",
    "date": "2018-01-07T05:47:46.639Z"
  },
  {
    "_id": "5a51c03c0db1e014ae72828e",
    "ip": "::ffff:86.58.91.204",
    "date": "2018-01-07T06:37:48.660Z"
  },
  {
    "_id": "5a51d13c0db1e014ae72828f",
    "ip": "::ffff:169.54.244.78",
    "date": "2018-01-07T07:50:20.798Z"
  },
  {
    "_id": "5a51e46d0db1e014ae728290",
    "ip": "::ffff:116.108.201.157",
    "date": "2018-01-07T09:12:13.482Z"
  },
  {
    "_id": "5a51ea350db1e014ae728291",
    "ip": "::ffff:98.143.148.135",
    "date": "2018-01-07T09:36:53.538Z"
  },
  {
    "_id": "5a51f2200db1e014ae728292",
    "ip": "::ffff:74.115.214.149",
    "date": "2018-01-07T10:10:40.220Z"
  },
  {
    "_id": "5a520d7d0db1e014ae728293",
    "ip": "::ffff:138.36.5.170",
    "date": "2018-01-07T12:07:25.034Z"
  },
  {
    "_id": "5a5219890db1e014ae728294",
    "ip": "::ffff:138.36.5.143",
    "date": "2018-01-07T12:58:49.047Z"
  },
  {
    "_id": "5a522c730db1e014ae728295",
    "ip": "::ffff:158.85.81.121",
    "date": "2018-01-07T14:19:31.041Z"
  },
  {
    "_id": "5a52328e0db1e014ae728296",
    "ip": "::ffff:62.215.127.198",
    "date": "2018-01-07T14:45:34.060Z"
  },
  {
    "_id": "5a52328e0db1e014ae728297",
    "ip": "::ffff:162.243.69.215",
    "date": "2018-01-07T14:45:34.770Z"
  },
  {
    "_id": "5a5239100db1e014ae728298",
    "ip": "::ffff:138.36.62.138",
    "date": "2018-01-07T15:13:20.282Z"
  },
  {
    "_id": "5a525bf00db1e014ae728299",
    "ip": "::ffff:39.104.68.70",
    "date": "2018-01-07T17:42:08.827Z"
  },
  {
    "_id": "5a525dd80db1e014ae72829a",
    "ip": "::ffff:176.231.97.139",
    "date": "2018-01-07T17:50:16.824Z"
  },
  {
    "_id": "5a5270890db1e014ae72829b",
    "ip": "::ffff:213.57.160.59",
    "date": "2018-01-07T19:10:01.785Z"
  }
];

app.service('statisticsService', ['$http', function($http) {
		
	var getAllVisitors = function() {
		return $http.get('http://localhost:5000/api/getStatistics');
	}

	var getAllVisitors_stub = function() {
		return statisticsStub;
	}

	return {
		getAllVisitors: getAllVisitors,
		getAllVisitors_stub: getAllVisitors_stub
	}
}]);
