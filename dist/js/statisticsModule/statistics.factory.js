(function(){
	let app = angular.module('websiteStatistics');

	app.factory('statisticsFactory', ['$http', function($http) {
		
		class Visitor {
			constructor(data) {
			    for(let k in data) {
					this[k] = data[k];
				}
				this.formattedIp = this.ip.replace('::ffff:', "");
			}
		}

		let fetchData = (apiUrl) => {
			return $http.get(apiUrl);
		}

		return {
			visitor: Visitor,
			fetchData: fetchData
		}
	}]);
}());