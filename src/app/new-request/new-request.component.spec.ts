import {
  it,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

// Load the implementations that should be tested
import {NewRequetComponent} from './new-request.component';
import {NewRequestService} from './new-request.service';

describe('NewRequetComponent', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    NewRequetComponent,
    NewRequestService
  ]);

  it('should exist', inject([ NewRequetComponent ], (newRequetComponent) => {
    expect(!!newRequetComponent).toEqual(true);
  }));

});
