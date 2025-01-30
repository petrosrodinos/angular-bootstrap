import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AccountInfoComponent } from './account-info/account-info.component';

@Component({
  selector: 'app-navigation',
  imports: [
    RouterLink,
    CommonModule,
    RouterOutlet,
    RouterModule,
    AccountInfoComponent,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  constructor() {}

  sideNavItems = [
    { name: 'Dashboard', url: '#', icon: 'fa-solid fa-gauge' },
    { name: 'Bookings', url: '#', icon: 'fa-regular fa-calendar' },
    { name: 'Guests', url: '#', icon: 'fa-regular fa-user' },
    { name: 'Performance', url: '#', icon: 'fa-solid fa-chart-simple' },
    { name: 'Partnerships', url: '#', icon: 'fa-regular fa-handshake' },
    {
      name: 'Properties',
      url: '/properties',
      icon: 'fa-regular fa-question-circle',
    },
    { name: 'Guest requests', url: '#', icon: 'fa-regular fa-question-circle' },
    { name: 'Guest guide', url: '#', icon: 'fa-regular fa-question-circle' },
  ];
}
