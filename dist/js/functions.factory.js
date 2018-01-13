(function(){
	let app = angular.module('websiteStatistics');

	app.factory('functionsFactory', [function() {

		let removeDuplicatesBy = (keyFn, array) => {
			let mySet = new Set();

			return array.filter(function(x) {
		    	let key = keyFn(x)
		    	let isNew = !mySet.has(key);

		    	if (isNew) {
		    		mySet.add(key);
		    	}

		    	return isNew;
			});
		};

		let getVisitorsByDay = (type, value, array) => {
			switch(type) {
			    case "day":
					return array.filter(visitorObj => visitorObj.date.substring(0, 10) == value);
			        break;
			    case "month":
			        return array.filter(visitorObj => visitorObj.date.substring(0, 7) == value);
			        break;
			    case "year":
			        return array.filter(visitorObj => visitorObj.date.substring(0, 4) == value);
			        break;
			    default:
			        return array.filter(visitorObj => visitorObj.date.substring(0, 10) == value);
			}
		}

		let getFormattedDate = (requiredDay = 0) => {
			var date = new Date();
			var dd = date.getDate();
			var mm = date.getMonth()+1; //January is 0!
			var yyyy = date.getFullYear();

			if(dd<10){
			    dd='0'+dd;
			} 
			if(mm<10){
			    mm='0'+mm;
			}

			return yyyy+'-'+mm+'-'+dd;
		}

		return {
			getFormattedDate: getFormattedDate,
			getVisitorsByDay: getVisitorsByDay,
			removeDuplicatesBy: removeDuplicatesBy
		}
	}]);
}());