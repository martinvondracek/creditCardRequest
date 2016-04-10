import {
  it,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

// Load the implementations that should be tested
import {NewRequestService} from './new-request.service';

describe('NewRequestService', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    NewRequestService
  ]);

  it('should exist', inject([ NewRequestService ], (newRequestService) => {
    expect(!!newRequestService).toEqual(true);
  }));

});
