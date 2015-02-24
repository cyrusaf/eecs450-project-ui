var controllers = angular.module('controllers', []);

controllers.controller('itemController', ['$scope', '$http', function ($scope, $http) {

	$scope.apps = [
		{
			name: 'Mail',
			id: 'com.apple.mail'
		},
		{
			name: 'Calendar',
			id: 'com.apple.calendar'
		}
	];

}]);