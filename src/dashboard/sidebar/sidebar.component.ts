import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/cart.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() sideNavStatus: boolean = false;

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  SideNavToggled() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  constructor(private service: CartService) {}
  list = [
    {
      routerLink: '/dashboard',
      number: '1',
      name: 'dashboard',
      icon: 'fa-solid fa-house',
    },
    {
      routerLink: '/products',
      number: '2',
      name: 'product categories',
      icon: 'fa-solid fa-circle-radiation',
    },
    {
      nummber: '3',
      name: 'campaigns',
      icon: 'fa-solid fa-envelope',
    },
    {
      nummber: '4',
      name: 'Applications',
      icon: 'fa-solid fa-pen',
    },
    {
      nummber: '5',
      name: 'Mycontacts',
      icon: 'fa-solid fa-address-book',
    },
    {
      nummber: '6',
      name: 'claims',
      icon: 'fa-solid fa-folder',
    },
    {
      nummber: '6',
      name: 'Twitter',
      icon: 'fa-brands fa-twitter',
    },
    {
      nummber: '6',
      name: 'Settings',
      icon: 'fa-solid fa-gear',
    },
 
  ];

  toggleDarkMode(event: any): void {
    this.service.toggleTheme();
  }
}
