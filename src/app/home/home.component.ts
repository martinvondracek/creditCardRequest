import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'home',
  styles: [ require('./home.scss').toString() ],
  template: require('./home.html')
})
export class Home implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
