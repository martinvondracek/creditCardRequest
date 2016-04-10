import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router'

import {RequestModel} from '../RequestModel';

import {NewRequestService} from '../new-request.service';

@Component({
  selector: 'confirmation',
  styles: [ require('./confirmation.scss').toString() ],
  template: require('./confirmation.html')
})
export class Confirmation implements OnInit {
  model: RequestModel;

  constructor(
    private router: Router,
    private newRequestService: NewRequestService
  ) {
  }

  ngOnInit() {
    this.model = this.newRequestService.getModel();

    // we need status at least 2, otherwise we navigate to previous step
    if (this.model.status < 2) {
      this.router.navigate( ['PersonalDetails']);
    }
  }

}
