var controllers = angular.module('controllers', []);

controllers.controller('itemController', ['$scope', '$http', function ($scope, $http) {
	$scope.ip   = "http://localhost:3001";
	$scope.url  = document.URL; 
	$scope.apps = [];
	$scope.exts = [".pdf", ".txt", ".docx", ".xlsx", ".jpg", ".png"];
	getApps($scope, $http);

	$scope.removeApp = function() {
		$http.post($scope.ip + '/items/delete', $scope.remove).success(function(data, status, headers, config) {
			getApps($scope, $http);
		});
	}

	$scope.toggleExt = function(app, ext) {
		if (app.exts.indexOf(ext) == -1) {
			$scope.addExt(app, ext);
		} else {
			$scope.removeExt(app, ext);
		}
	}

	$scope.addExt = function(app, ext) {
		var temp = app;
		console.log(ext);
		temp.exts.push(ext);
		$http.put($scope.ip + '/items', temp).success(function(data, status, headers, config) {
			getApps($scope, $http);
		});
	}

	$scope.removeExt = function(app, ext) {
		var temp = app;
		console.log(ext);
		temp.exts.splice(temp.exts.indexOf(ext), 1);
		$http.put($scope.ip + '/items', temp).success(function(data, status, headers, config) {
			getApps($scope, $http);
		});
	}

}]);

function getApps($scope, $http) {
	$http.get($scope.ip + '/items').success(function(data, status, headers, config) {
		$scope.apps = data;

		// Get exts
		//getExts($scope);
	});		
}

function getExts($scope) {
	$scope.exts = $scope.apps.reduce(function(prev, curr, index) {
		if (index == 1) {
			var ext = curr.exts[i];
			if (prev.exts.indexOf(ext) == -1) {
				prev.exts.push(ext);
			}
			return prev.exts
		}
		for (var i = 0; i < curr.exts.length; i++) {
			var ext = curr.exts[i];
			if (prev.indexOf(ext) == -1) {
				prev.push(ext);
			}
		}
		return prev
	});
}