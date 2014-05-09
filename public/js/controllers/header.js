window.angular.module('ngff.controllers.header', [])
    .controller('HeaderController', ['$scope', 'Global',
        function ($scope, Global) {
            $scope.global = Global;

            $scope.navbarEntries = [
                {
                    "title": "Restaurants",
                    "link": "leagues"
                },
                {
                    "title": "Restaurant Voting",
                    "link": "leagues"
                }
            ];
        }]);