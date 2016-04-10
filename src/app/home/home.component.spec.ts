import {
  it,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

// Load the implementations that should be tested
import {Home} from './home.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    Home
  ]);

  it('should exist', inject([ Home ], (home) => {
    expect(!!home).toEqual(true);
  }));

});
