let app = angular.module("minhaAplicacao", []);

app.factory('ServicoMat', function() {
   // Inicializa um objeto vazio
   let operacao = {};
   // Adiciona um método "multiplicar" ao objeto
   operacao.multiplicar = function(a, b) {
      return (a * b);
   }
    // Retorna o objeto, que agora contém o método "multiplicar"   
   return operacao;
});

app.controller('meuController', function($scope, ServicoMat) {
    $scope.num1 = '';
    $scope.num2 = '';
    $scope.resultado = '';
    $scope.informacoesExibidas = false;

    $scope.btnMultiplicar = function() {
        let numero1 = parseFloat($scope.num1);
        let numero2 = parseFloat($scope.num2);

        $scope.resultado = ServicoMat.multiplicar(numero1, numero2);
        $scope.informacoesExibidas = true;
    }
});
