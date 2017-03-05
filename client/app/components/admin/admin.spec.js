import {admin} from './admin';
import {adminDirective} from './admin.directive';
import template from './admin.html';
import {AdminController} from './admin.controller';

describe('Blog', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(blog.name));
  beforeEach(inject(_$rootScope_ => {
    $rootScope = _$rootScope_;
    makeController = (injectables) => {
      return new AdminController(injectables);
    };
  }));

  describe('module', () => {
    it('should have an appropriate name', () => {
      expect(admin.name).to.equal('admin');
    });
  });

  describe('directive', ()=> {
    let ddo;
    beforeEach(() => {
      ddo = adminDirective();
    });

    it('should have the right template', () => {
      expect(ddo.template).to.equal(template);
    });

    it('should have the right controller', () => {
      expect(ddo.controller).to.equal(BlogController);
    });

    it('should have an isolate scope', () => {
      expect(ddo.scope).to.be.an('object');
    });

    it('should use controllerAs', () => {
      expect(ddo.controllerAs).to.be.a('string');
    });
  });

  describe('controller', ()=> {
    it('should have blog posts', ()=> {
      const controller = makeController();
    });
  });

  describe('template', ()=> {

  });
});
