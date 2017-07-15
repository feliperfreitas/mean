'use strict'

var app = angular.module('AppChamados', ['ui.router'])


app.factory('Parametros', function(){
  return{
    nome_sistema: 'Curso MEAN Stack',
    
    administrador: {
      menu: {
        cadastros: [{
          link: '#!/produto',
          descricao: 'Produto'
        },
        {
          link: '#!/usuario',
          descricao: 'Usuários'
        }],

        relatorios: [{
          link: '#!/produto',
          descricao: 'Produto'
        },
        {
          link: '#!/usuario',
          descricao: 'Usuários'
        }]

      }
    }

  }
})


//Rotas da Aplicação
app.config(myConfig)

function myConfig($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('home', {
    url: '/home',
    views: {
      '': {
        templateUrl: './views/home.html',
        controller:'HomeController',
        controllerAs: 'vm'
      },
      'menu':{
        templateUrl: './views/menu.html',
        controller:'MenuController',
        controllerAs: 'vm'
      }
    }
  })


  .state('cnsUsuario', {
    url: '/usuario',
    views: {
      '': {
        templateUrl: './views/cnsUsuario.html',
        controller: 'UsuarioController',
        controllerAs: 'vm'
      },
      'menu':{
        templateUrl: './views/menu.html',
        controller:'MenuController',
        controllerAs: 'vm'
      }
    }
  })

  .state('cnsProduto', {
    url: '/produto',
    views:{
      '':{
        templateUrl:'./views/cnsProduto.html',
        controller:'ProdutoController',
        controllerAs:'vm'
      },
      'menu':{
        templateUrl:'./views/menu.html',
        controller:'MenuController',
        controllerAs: 'vm'
      }
    }
  })

  // Adicionei aqui pra caso de alteração do produto
  .state('alterarProduto', {
    url: '/produto/:id',
    views:{
      '':{
        templateUrl:'./views/cnsProduto.html',
        controller:'ProdutoController',
        controllerAs:'vm'
      },
      'menu':{
        templateUrl:'./views/menu.html',
        controller:'MenuController',
        controllerAs: 'vm'
      }
    }
  })

  .state('login', {
    url:'/login',
    views:{
      '': {
        templateUrl:'./views/login.html',
        controller:'LoginController',
        controllerAs:'vm'
      }
    }
  })


  

  $urlRouterProvider.otherwise('/home')

}