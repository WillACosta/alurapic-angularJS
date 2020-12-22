angular
  .module("alurapic")
  .controller("ImgController", function ($scope, $http) {
    $scope.imgs = [];

    var promise = $http.get("v1/fotos");
    promise
      .then((response) => {
        $scope.imgs = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  });
