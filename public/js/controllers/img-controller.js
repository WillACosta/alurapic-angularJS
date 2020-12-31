angular
  .module("alurapic")
  .controller("ImgController", function ($scope, imgResource ) {
    $scope.imgs = [];
    $scope.filterModel = '';

    // Obtém os dados com um request get
    imgResource.query(function (response) {
      $scope.imgs = response;
    }, function (e) {
      console.log(e);
    });

    // var promise = $http.get("v1/fotos");
    // promise
    //   .then((response) => {
    //     $scope.imgs = response.data;
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    $scope.delete = function (image) {

      imgResource.delete({
        fotoId: img._id
      }, function (response) {
        var index = $scope.imgs.indexOf(image);
        $scope.imgs.splice(index, 1);
      }, function (e) {

      });

      // $http.delete("v1/fotos/" + image._id).then((response) => {
      //   var index = $scope.imgs.indexOf(image);
      //   $scope.imgs.splice(index, 1);
      // }).catch((e) => {})
    };
  });