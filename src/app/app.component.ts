/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Home} from './home';
import {HeaderComponent} from './header/header';

import {AppState} from './app.service';
import {RouterActive} from './router-active';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
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
        &copy; 2016 Martin Vondracek
      </footer>
    </div>
  `
})
@RouteConfig([
  { path: '/',      name: 'Home', component: Home, useAsDefault: true }
])
export class App {

  constructor(public appState: AppState) {}

  ngOnInit() {
  }

}
