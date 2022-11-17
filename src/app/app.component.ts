import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [ 
  // { title: 'Dashboard', url: '/dashboard', icon: 'layers' },
  { title: 'Home', url: '/home', icon: 'home' },
  { title: 'About', url: '/about', icon: 'help-circle' },
  // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
  // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
  // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
  // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
];
  public labels = [];
  constructor() {}
}
