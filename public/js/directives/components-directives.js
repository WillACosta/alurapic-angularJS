angular.module("componentsDirectives", [])
  .directive('panelDefault', function () { // Atentar para usar camelCase nos nomes das diretivas e '-' no html. Ex.:  'panel-default'
    var ddo = {}; // Direct Definition Object 

    ddo.restrict = 'AE'; // Pode ser utilizada de duas formas: Atributo e Elemento 
    ddo.transclude = true; // Manter elementos filhos ao renderizar a diretiva e informar quem, nesse caso a classe 'panel-body'

    /** Isolando a diretiva - @ : Indica o parametro recebido como valor para o componente  */
    ddo.scope = {
      titulo: '@'
    };

    ddo.templateUrl = 'js/directives/panel-default.html';

    return ddo;
  })
  .directive('singleImage', function () {
    var ddo = {};

    ddo.restrict = 'AE';

    ddo.scope = {
      titulo: '@',
      url: '@'
    };

    ddo.templateUrl = 'js/directives/single-image.html';

    return ddo;
  })
  .directive('btnDanger', function () {
    var ddo = {};

    ddo.restrict = 'E';

    ddo.scope = {
      label: '@',
      action: '&'
    }

    // Usar '&' considera o valor como uma expressão do controller de origem

    ddo.template = '<a class="btn btn-danger btn-block" ng-click="action(img)">{{label}}</a>'

    return ddo;
  })
  .directive('setFocus', function () {
    var ddo = {};

    ddo.restrict = 'A';

    // ddo.scope = {
    //   focused: '=', // Comunicação bidirecional entre o atributo
    // }

    ddo.link = function (scope, element) {

      // Observadores de mudanças | Semelhante aos EventEmmiter do angular 9
      // scope.$watch('focused', function () {
      //   if (scope.focused) {
      //     element[0].focus();
      //     scope.focused = false;
      //   }
      // });

      // Ouve o evento do broadcast
      scope.$on('imgSaved', function () {
        element[0].focus();
        scope.focused = false;
      });
    }

    return ddo;
  });