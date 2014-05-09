window.angular.module('ngff.controllers.leagues', [])
    .controller('LeaguesController', ['$scope','$routeParams','$location','Global','Leagues',
        function ($scope, $routeParams, $location, Global, Leagues) {
            $scope.global = Global;

            $scope.create = function () {
                var league = new Leagues({
                    restaurant: this.league.restaurant,
                    phonenumber: this.league.phonenumber,
                    item1: this.league.item1,
                    item2: this.league.item2,
                    item3: this.league.item3,
                    item4: this.league.item4,
                    item5: this.league.item5,
                    item6: this.league.item6,
                    item7: this.league.item7,
                    item8: this.league.item8,
                    item9: this.league.item9,
                    item10: this.league.item10,
                    item11: this.league.item11,
                    item12: this.league.item12,
                    item13: this.league.item13,
                    item14: this.league.item14,
                    item15: this.league.item15,
                    item16: this.league.item16,
                    item17: this.league.item17,
                    item18: this.league.item18,
                    item19: this.league.item19,
                    item20: this.league.item20,
                    item21: this.league.item21,
                    item22: this.league.item22,
                    item23: this.league.item23,
                    item24: this.league.item24,
                    item25: this.league.item25,
                    item26: this.league.item26,
                    item27: this.league.item27,
                    item28: this.league.item28,
                    item29: this.league.item29,
                    item30: this.league.item30

                });

                league.$save(function (response) {
                    $location.path("leagues/" + response._id);
                });

                this.league.name = "";
                this.league.item1 = "";
            };

            $scope.find = function (query) {
                Leagues.query(query, function (leagues) {
                    $scope.leagues = leagues;
                });
            };

            $scope.findOne = function () {
                Leagues.get({ leagueId: $routeParams.leagueId }, function (league) {
                    $scope.league = league;
                });
            };

            $scope.update = function () {
                var league = $scope.league;
                league.$update(function () {
                    $location.path('leagues/' + league._id);
                });
            };

            $scope.destroy = function (league) {
                league.$remove();
                for (var i in $scope.leagues) {
                    if ($scope.leagues[i] == league) {
                        $scope.leagues.splice(i, 1)
                    }
                }
            };

        }]);