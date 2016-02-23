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
			$http.post('/api/delete', applicant)
		}
	}]);
