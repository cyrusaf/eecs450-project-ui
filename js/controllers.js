var controllers = angular.module('controllers', []);

controllers.controller('itemController', ['$scope', '$http', function ($scope, $http) {

	$scope.ip = "http://localhost:3001"
	$scope.apps = [];
	getApps($scope, $http);

	$scope.addApp = function() {
		$http.post($scope.ip + '/items', $scope.create).success(function(data, status, headers, config) {
			getApps($scope, $http);
		});
	}

	$scope.removeApp = function() {
		$http.post($scope.ip + '/items/delete', $scope.remove).success(function(data, status, headers, config) {
			getApps($scope, $http);
		});
	}

}]);

function getApps($scope, $http) {
	$http.get($scope.ip + '/items').success(function(data, status, headers, config) {
		$scope.apps = data;
	});		
}