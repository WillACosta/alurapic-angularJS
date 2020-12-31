angular.module("alurapic", ['componentsDirectives', 'ngAnimate', 'ngRoute', 'NServices']) // Criar o módulo
  .config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true); // Omitir a # das urls de roteamento

    $routeProvider.when('/images', {
      templateUrl: 'partials/main.html',
      controller: 'ImgController'
    });

    $routeProvider.when('/images/new', {
      templateUrl: 'partials/register.html',
      controller: 'ImageController'
    });

    $routeProvider.when('/images/edit/:id', {
      templateUrl: 'partials/register.html',
      controller: 'ImageController'
    });

    // $routeProvider.otherwise({
    //   templateUrl: 'partials/404.html',
    //   controller: ''
    // });

    $routeProvider.otherwise({redirectTo: '/images'});
  });