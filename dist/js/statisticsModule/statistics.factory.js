(function(){
	let app = angular.module('websiteStatistics');

	app.factory('statisticsFactory', [function() {
		// let Visitor = function(data) {
		// 	for(let k in data) {
		// 		this[k] = data[k];
		// 	}
		// 	this.formattedIp = this.ip.replace('::ffff:', "");
		// }

		class Visitor {
			constructor(data) {
			    for(let k in data) {
					this[k] = data[k];
				}
				this.formattedIp = this.ip.replace('::ffff:', "");
			}
		}

		return {
			visitor: Visitor
		}
	}]);
}());