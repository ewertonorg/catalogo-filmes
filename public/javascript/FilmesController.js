function FilmesController($http, $scope) {
  $http.get('/lista')
  .success(function(retorno) {
    $scope.filme = retorno;
  });

  $http.post('/grava', {titulo:'Gattaca', diretor:'Andrew Nicool', ano:1997})
  .success(function(retorno){
  	console.log(retorno);
  });
}