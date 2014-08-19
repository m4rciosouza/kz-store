'use strict';

/**
 * @ngdoc overview
 * @name kzStoreAngularApp
 * @description
 * # kzStoreAngularApp
 *
 * Main module of the application.
 */
angular
  .module('kzStoreAngularApp', [
    //'ngAnimate',
    //'ngCookies',
    'ngResource',
    'ngRoute'
    //'ngSanitize',
    //'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/produto', {
        templateUrl: 'views/produto.html',
        controller: 'ProdutoCtrl'
      })
      .when('/produtos', {
        templateUrl: 'views/produtos.html',
        controller: 'ProdutosCtrl'
      })
      .when('/carrinho', {
        templateUrl: 'views/carrinho.html',
        controller: 'CarrinhoCtrl'
      })
      .when('/finalizar-compra', {
        templateUrl: 'views/finalizar-compra.html',
        controller: 'FinalizarCompraCtrl'
      })
      .when('/pedido', {
        templateUrl: 'views/pedido.html',
        controller: 'PedidoCtrl'
      })
      .when('/pedidos', {
        templateUrl: 'views/pedidos.html',
        controller: 'PedidosCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
