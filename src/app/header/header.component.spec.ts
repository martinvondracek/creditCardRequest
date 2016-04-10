import {
  it,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

// Load the implementations that should be tested
import {HeaderComponent} from './header.component';

describe('HeaderComponent', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    HeaderComponent
  ]);

  it('should exist', inject([ HeaderComponent ], (headerComponent) => {
    expect(!!headerComponent).toEqual(true);
  }));

});
