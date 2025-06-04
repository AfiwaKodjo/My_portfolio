import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <div class="d-flex">
  <!-- Sidebar -->
  <div class="bg-dark text-white sidebar">
    <div class="sidebar-header p-3">
      <h2>Portfolio</h2>
    </div>
    <div class="list-group list-group-flush">
      <a routerLink="/" routerLinkActive="active" 
         class="list-group-item list-group-item-action bg-dark text-white">
        <i class="bi bi-house"></i> Home
      </a>
      <a routerLink="/About" routerLinkActive="active" 
         class="list-group-item list-group-item-action bg-dark text-white">
        <i class="bi bi-person"></i> About
      </a>
      <a routerLink="/Resume" routerLinkActive="active" 
         class="list-group-item list-group-item-action bg-dark text-white">
        <i class="bi bi-file-earmark-text"></i> Resume
      </a>
      <a routerLink="/Contact" routerLinkActive="active" 
         class="list-group-item list-group-item-action bg-dark text-white">
        <i class="bi bi-envelope"></i> Contact
      </a>
    </div>
  </div>
  <div class="flex-grow-1">
    <router-outlet></router-outlet>
  </div>
</div>
  `,
  imports: [RouterLink,RouterOutlet],
  //styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
