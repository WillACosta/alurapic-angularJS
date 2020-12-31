angular.module('alurapic').controller('ImageController', function ($scope, $routeParams, imgResource, saveImageService) {
    $scope.img = {};
    $scope.message = undefined;

    var id = $routeParams.id;

    if (id) {
        imgResource.get({
            fotoId: id
        }, function (data) {
            $scope.img = data;
        }, function (e) {
            console.log('Error: ', e);
        });
    }

    $scope.save = function () {

        if (!$scope.formulario.$valid) return;

        saveImageService.save($scope.img).then(function (response) {
            $scope.message = response.message;
            if ($scope.new) $scope.img = {};

            // $scope.focused = true; // Manipular a diretiva de auto-foco no botão de voltar logo depois de salvar            

        }).catch(function (response) {
            $scope.message = response.message;
        });

        // if ($scope.img._id) {

        //     imgResource.update({
        //         fotoId: $scope.img._id
        //     }, $scope.img, function () {
        //         $scope.message = 'Image updated successfully!'
        //     }, function (e) {
        //         $scope.message = 'Image not updated!'
        //     });

        // } else {

        //     imgResource.save($scope.img, function () {
        //         $scope.img = response.data;
        //         $scope.message = 'Image saved successfully!'
        //     }, function (e) {
        //         console.error('Error', e);
        //         $scope.message = 'Image not saved!'
        //     });
        // }
    };
});