var app = angular.module("myApp", []);
app.controller("todoCtrl", function ($scope) {
  $scope.required = true;
  $scope.pelis = [
    { title: "Titanic", year: "1980", genre: "Romance", quitar: false },
  ];

  $scope.agregarPeli = function () {
    $scope.pelis.push({
      title: $scope.namePeli,
      year: $scope.yearPeli,
      genre: $scope.genrePeli,
      quitar: false,
    });

    $scope.namePeli = "";
    $scope.yearPeli = "";
    $scope.genrePeli = "";
  };

  $scope.remove = function (index) {
    $scope.pelis.splice(index, 1);
  };
});
