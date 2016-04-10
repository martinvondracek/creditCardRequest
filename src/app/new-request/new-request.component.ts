import {Component, OnInit, Injector} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {CardTypes} from './card-types';
import {Confirmation} from './confirmation';
import {PersonalDetails} from './personal-details';

import {NewRequestService} from './new-request.service';

@Component({
  template: `
    <router-outlet></router-outlet>
  `,
  directives: []
})

@RouteConfig([
  { path: '/cardTypes', name: 'CardTypes', component: CardTypes, useAsDefault: true },
  { path: '/personalDetails', name: 'PersonalDetails', component: PersonalDetails },
  { path: '/confirmation', name: 'Confirmation', component: Confirmation }
])

export class NewRequetComponent implements OnInit {
  constructor(
    private newRequestService: NewRequestService
  ) {
  }

  ngOnInit() {
    this.newRequestService.createNewModel();
  }
}
