'use strict';

angular.module('angularMeanApp.auth', [
  'angularMeanApp.constants',
  'angularMeanApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
