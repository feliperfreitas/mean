'use strict'

app.controller('LoginController', LoginController)

// Adicionado $state ( Para controlar rotas ), e $stateParams para controlar parametros de rotas 
function LoginController($http, $state){
	
	var vm = this
	vm.Usuario = {}

	vm.Login = function(){
		
		$http({
			method: 'POST',
			url: '/api/v1/login',
			data: vm.Usuario
		}).then(function(retorno){

			if(retorno.data.error === false){
				localStorage.setItem('JwtToken', retorno.data.token)
				$state.go('home')
			}else{
				sweetAlert("Oops...", retorno.data.message, "error");
			}

		})
	}

}