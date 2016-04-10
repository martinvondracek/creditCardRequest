import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'header-component',
  styles: [ require('./header.scss').toString() ],
  template: require('./header.html')
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
