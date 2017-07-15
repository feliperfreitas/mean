'use strict'

app.controller('MenuController', MenuController)

function MenuController(Parametros, $state){

	var vm = this

	vm.Parametros = Parametros

	vm.Logout = function(){
		localStorage.clear()
		$state.go('login')
	}
}