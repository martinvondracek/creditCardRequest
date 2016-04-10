import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router'

import {RequestModel} from '../RequestModel';

import {NewRequestService} from '../new-request.service';

@Component({
  selector: 'card-types',
  styles: [ require('./card-types.scss').toString() ],
  template: require('./card-types.html')
})
export class CardTypes implements OnInit {
  model: RequestModel;

  constructor(
    private router: Router,
    private newRequestService: NewRequestService
  ) {
  }

  ngOnInit() {
    this.model = this.newRequestService.getModel();
  }

  selectCardType(type: string) {
    // save option
    this.model.cardType = type;
    this.model.status = 1;
    this.newRequestService.saveModel(this.model);

    // go to next page
    this.router.navigate( ['PersonalDetails']);
  }

}
