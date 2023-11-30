let app = angular.module("minhaAplicacao", []);

app.service('ServicoMat', function() {
    // Adiciona um método "multiplicar" ao serviço usando "this"
    this.multiplicar = function(a, b) {
        return (a * b);
    };
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
    };
});
