import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'confirmation',
  styles: [ require('./confirmation.scss').toString() ],
  template: require('./confirmation.html')
})
export class Confirmation implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
