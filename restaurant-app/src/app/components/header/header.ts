import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  imports: [MenubarModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuItems: MenuItem[] = [
    {
      label: 'About Us'
    },
    {
      label: 'Contact Us'
    },
    {
      label: 'Language',
      items: [
        { label: 'English' },
        { label: 'ქართული' },
        { label: 'Русский' }
      ]
    }
  ];

  constructor() {

  }
}
