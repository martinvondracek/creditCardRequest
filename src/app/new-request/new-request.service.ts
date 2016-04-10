import {Injectable} from 'angular2/core';

import {RequestModel, RequestModelImpl} from './RequestModel';

@Injectable()
export class NewRequestService {
  private model: RequestModel;

  constructor() {
  }

  createNewModel() {
    return this.model = new RequestModelImpl();
  }

  getModel(): RequestModel {
    return this.model;
  }

  saveModel(model: RequestModel): void {
    this.model = model;
  }

  sendRequest(model: RequestModel): Promise<any> {
    // TODO change to http

    console.log('data sent', model);
    this.model = new RequestModelImpl();

    return Promise.resolve(true);
  }

}
