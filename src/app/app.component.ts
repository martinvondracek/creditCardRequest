/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {HeaderComponent} from './header';
import {Home} from './home';
import {NewRequetComponent} from './new-request';
import {About} from './about';

import {NewRequestService} from './new-request/new-request.service';
import {RouterActive} from './router-active';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [
    NewRequestService
  ],
  directives: [
    RouterActive,
    HeaderComponent
  ],
  styles: [ require('./app.scss').toString() ],
  template: `
    <div class="main-content">
      <header>
        <header-component></header-component>
      </header>

      <main>
        <router-outlet></router-outlet>
      </main>

      <footer>
        2016 Martin Vondracek
      </footer>
    </div>
  `
})
@RouteConfig([
  { path: '/', name: 'Home', component: Home, useAsDefault: true },
  { path: '/new-request/...', name: 'NewRequest', component: NewRequetComponent },
  { path: '/about', name: 'About', component: About }
])
export class App {

  constructor() {}

  ngOnInit() {
  }

}
