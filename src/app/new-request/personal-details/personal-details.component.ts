import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'personal-details',
  styles: [ require('./personal-details.scss').toString() ],
  template: require('./personal-details.html')
})
export class PersonalDetails implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
