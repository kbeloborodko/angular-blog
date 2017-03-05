import './admin.styl';
import template from './admin.html';
import {AdminController as controller} from './admin.controller';

export const adminDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    scope: {},
    restrict: 'E',
    replace: true
  };
};