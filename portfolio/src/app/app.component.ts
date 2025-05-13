import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <nav>
    <a routerLink="/">Home</a>
    <a routerLink="/About">About</a>
    <a routerLink="/Resume">Resume</a>
    <a routerLink="/Portfolio">Portfolio</a>
    <a routerLink="/Contact">Contact</a>
  </nav>
  <router-outlet />
  `,
  imports: [RouterLink,RouterOutlet],
  //styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
