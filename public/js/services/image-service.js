angular.module('NServices', ['ngResource'])
  .factory('imgResource', function ($resource) {

    // Implementação do verbo PUT, pois o resource não suporta nativamente
    return $resource('v1/fotos/:fotoId', null, {
      update: {
        method: 'PUT'
      }
    });
  })
  .factory('saveImageService', function (imgResource, $q, $rootScope) {
    var service = {};

    var event = 'imgSaved';

    service.save = function (image) {
      return $q(function (resolve, reject) {

        if (image._id) {
          imgResource.update({
            fotoId: image._id
          }, image, function () {
            $rootScope.$broadcast(event) // Dispara Evento

            resolve({
              message: 'Image updated successfully!',
              new: false
            })

          }, function (e) {
            reject('Sorry! This is not possible!');
          });
        } else {

          imgResource.save(image, function () {
            $rootScope.$broadcast(event) // Dispara Evento

            resolve({
              message: 'Image saved successfully!',
              new: true
            });
          }, function (e) {
            console.error('Error', e);
            reject({
              message: 'Image not saved!',
            })
          });
        }
      })
    };

    return service;
  });