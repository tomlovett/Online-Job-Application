angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', function($scope) {
	}]);

angular.module('JobApp')
	.controller('applicantController', ['$scope', '$http', function($scope, $http) {
		$http.get('/api/load-applicants')
			.then(function(returnData) {
				console.log(returnData)
				$scope.applicants = returnData.data
				console.log('dynomite!! :', $scope.applicants)		
			})
	}]);
