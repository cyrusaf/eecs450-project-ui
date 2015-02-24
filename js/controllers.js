var controllers = angular.module('controllers', []);

controllers.controller('itemController', ['$scope', '$http', function ($scope, $http) {

	$scope.apps = [];
	getApps($scope, $http);

	$scope.addApp = function() {
		$http.post('http://localhost:3001/items', $scope.create).success(function(data, status, headers, config) {
			getApps($scope, $http);
		});
	}

	$scope.removeApp = function() {
		$http.post('http://localhost:3001/items/delete', $scope.remove).success(function(data, status, headers, config) {
			getApps($scope, $http);
		});
	}

}]);

function getApps($scope, $http) {
	$http.get('http://localhost:3001/items').success(function(data, status, headers, config) {
		$scope.apps = data;
	});		
}