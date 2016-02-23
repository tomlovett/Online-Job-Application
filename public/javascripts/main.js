angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', '$http', function($scope, $http){
		$scope.submitApplication = function() {
			$http.post('api/applicant', $scope.applicant)
				.then(function(returnData) {
					console.log(returnData)
					$scope.applicant = {}
				})
		}
	}]);

angular.module('JobApp')
	.controller('applicantController', ['$scope', function($scope){
		'boop'
	}]);
