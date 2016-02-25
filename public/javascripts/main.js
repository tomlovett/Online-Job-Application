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
			var index = $scope.applicants.indexOf(applicant)
			$scope.applicants.splice(index, 1) 
			// easier/faster than updating from server
		}
}]);

angular.module('JobApp')
	.controller('profileController', ['$scope', '$http', function($scope, $http) {

		"56cddefda8f7dbb5043065b3" // dummy ID
		var user = {userID: window.location.pathname.slice(1)}

		$http.post('/api/load-individual', user)
			.then(function(returnData) {
				$scope.applicant = returnData.data
			})
	}])