import angular from 'angular';
import {blogDirective} from './blog.directive';

// placing an export in front of ar var is the same
// as exporting the var at the end of the file
// using export {varname}
export const blog = angular.module('blog', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('blog', {
      url: '/',
      template: '<blog></blog>'
    });
  })
  .directive('blog', blogDirective);