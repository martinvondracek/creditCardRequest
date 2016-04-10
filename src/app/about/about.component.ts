import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'about',
  styles: [ require('./about.scss').toString() ],
  template: require('./about.html')
})
export class About implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
