angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', '$http', function($scope, $http){
		$scope.submitApplication = function(req, res) {
			$http.post('api/applicant', $scope.applicant)
				.then(function(returnData) {
					console.log(returnData)
					$scope.applicant = {}
					$http.get('/success')
				})
		}
	}]);

angular.module('JobApp')
	.controller('applicantController', ['$scope', function($scope){
		'boop'
	}]);
