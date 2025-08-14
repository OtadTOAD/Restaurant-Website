import { TranslocoService, TranslocoPipe } from '@ngneat/transloco';
import { MenubarModule } from 'primeng/menubar';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [MenubarModule, RouterLink, TranslocoPipe],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuItems: MenuItem[] = [];

  constructor(private translocoService: TranslocoService) {
    combineLatest([
      this.translocoService.selectTranslate('ABOUT_US'),
      this.translocoService.selectTranslate('CONTACT_US'),
      this.translocoService.selectTranslate('LANGUAGE')
    ]).subscribe(([aboutLabel, contactLabel, langLabel]) => {
      this.menuItems = [
        { label: aboutLabel, routerLink: '/about_us' },
        { label: contactLabel, routerLink: '/contact_us' },
        {
          label: langLabel,
          items: [
            { label: 'English', command: () => this.setLang('en') },
            { label: 'ქართული', command: () => this.setLang('ka') },
            { label: 'Русский', command: () => this.setLang('rus') }
          ]
        }
      ];
    });
  }

  setLang(lang: string) {
    this.translocoService.setActiveLang(lang)
  }
}
