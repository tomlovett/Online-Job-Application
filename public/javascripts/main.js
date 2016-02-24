angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', function($scope) {
}]);

angular.module('JobApp')
	.controller('applicantController', ['$scope', '$http', function($scope, $http) {

		$http.get('/api/load-applicants')
			.then(function(returnData) {
				$scope.applicants = returnData.data
			})


		$scope.deleteMe = function(applicant) {
			$http.post('/api/delete', applicant)   // functional
			var index = $scope.applicants.indexOf(applicant)
			$scope.applicants.splice(index, 1) // easier/faster than updating from server

			// re-loading from server, less efficient
			// $http.get('/api/load-applicants')
			// 	.then(function(returnData) {
			// 		$scope.applicants = returnData.data
			// 	})
		}
}]);

angular.module('JobApp')
	.controller('profileController', ['$scope', '$http', function($scope, $http) {

		// how to connect client/html to the data? ID is in the url, document is passed to the site.

		// $http.get('/api/')
		// 	.then(function(returnData) {
		// 		$scope.applicant = returnData.data
		// 	})
	}])