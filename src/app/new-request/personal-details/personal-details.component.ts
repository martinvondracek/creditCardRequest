import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router'

import {RequestModel} from '../RequestModel';

import {NewRequestService} from '../new-request.service';

@Component({
  selector: 'personal-details',
  styles: [ require('./personal-details.scss').toString() ],
  template: require('./personal-details.html')
})
export class PersonalDetails implements OnInit {
  model: RequestModel;

  constructor(
    private router: Router,
    private newRequestService: NewRequestService
  ) {
  }

  ngOnInit() {
    this.model = this.newRequestService.getModel();

    // we need status at least 1, otherwise we navigate to first step
    if (this.model.status < 1) {
      this.router.navigate( ['CardTypes']);
    }
  }

}
