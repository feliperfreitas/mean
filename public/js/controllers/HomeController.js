'use strict'

app.controller('HomeController', HomeController)

function HomeController(){

	var vm = this

	//Objetos
	vm.testefuncoes = {}

	vm.Cadastrar = function(){

		vm.mensagem = 'Meu nome é' + vm.testefuncoes.nome + ' ' + vm.testefuncoes.sobrenome +
						  ' e meu e-mail é ' + vm.testefuncoes.email
		
	}

	vm.InserirProduto = function(){
		var ax = {}
		angular.copy(vm.produto, ax)
		vm.ListaDeProdutos.push(ax)
		vm.produto = {}
	}

	vm.ListaDeProdutos = [
		{
			codigo: 1,
			descricao:'Processador i7'
		},
		{
			codigo:2,
			descricao:'Módulo Memória'
		},
		{
			codigo: 3,
			descricao:'Fonte Corsair 500w'
		},
		{
			codigo:4,
			descricao:'Placa de Vídeo GeForce 1060'
		}
	]
}