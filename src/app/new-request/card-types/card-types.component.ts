import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'card-types',
  styles: [ require('./card-types.scss').toString() ],
  template: require('./card-types.html')
})
export class CardTypes implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
