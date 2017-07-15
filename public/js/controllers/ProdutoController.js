'use strict'

app.controller('ProdutoController', ProdutoController)

// Adicionado $state ( Para controlar rotas ), e $stateParams para controlar parametros de rotas 
function ProdutoController($http, $state, $stateParams){

	var vm = this
	const token = localStorage.getItem('JwtToken')
	
	vm.Produto = {}
	vm.Produtos = []

	// funcao para listar um produto
	vm.ListarUm = function(id) {
		$http({
			method: 'GET',
			url: '/api/v1/produto/retrieve/' + id,
			headers: {Authorization: token}
		}).then(function(ret){
			vm.Produto = ret.data
		})
	}

	vm.ListarTodos = function(){
		$http({
			method: 'GET',
			url: '/api/v1/produto/retrieve',
			headers: {Authorization: token}
		}).then(function(ret){
			vm.Produtos = ret.data
		})
	}


	vm.Gravar = function(){
		// caso exista um ID na rota, significa que vai alterar

		if ( $stateParams.id ) {
		//if ( vm.Produto._id) {
			$http({
				method: 'POST',
				url: '/api/v1/produto/update',
				data: vm.Produto,
				headers: {Authorization: token}
			}).then(function(ret){
				// Redireciona para o inicio removendo o ID da rota
				//$state.go('cnsProduto')
				vm.ListarTodos()
				vm.Produto = {}
			})
		} else { // Senão vai incluir
			$http({
				method: 'POST',
				url: '/api/v1/produto/create',
				data: vm.Produto,
				headers: {Authorization: token}
			}).then(function(ret){
				vm.ListarTodos()
				vm.Produto = {}
			})
		}
	}

	vm.Deletar = function(id){
		if(confirm('Atenção\nVocê realmente deseja deletar esse registro ?')){
			$http({
				method: 'GET',
				url: '/api/v1/produto/delete/' + id,
				headers: {Authorization: token}
			}).then(function(ret){
				vm.ListarTodos()
				alert('Produto deletado com sucesso.')
			})
		}

	}
	
	


	// caso exista o id na rota
	if( $stateParams.id ) {
		vm.ListarUm($stateParams.id)
	} else {

	}

}