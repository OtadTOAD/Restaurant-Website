import { TranslocoPipe } from '@ngneat/transloco';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-landing',
  imports: [ButtonModule, TranslocoPipe, RouterLink, AnimateOnScrollModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing {
  menuItems: MenuItem[] = [
    {
      label: 'SUSHI',
      route: '/products/sushi',
      icon: '🍣',
      description: 'Fresh nigiri & sashimi',
      color: '#ff6b6b',
      gradient: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)'
    },
    {
      label: 'ROLL',
      route: '/products/roll',
      icon: '🍙',
      description: 'Creative maki rolls',
      color: '#4ecdc4',
      gradient: 'linear-gradient(135deg, #4ecdc4, #6ee8df)'
    },
    {
      label: 'SET',
      route: '/products/set',
      icon: '🍱',
      description: 'Combination meals',
      color: '#45b7d1',
      gradient: 'linear-gradient(135deg, #45b7d1, #69c7e8)'
    },
    {
      label: 'WOK',
      route: '/products/wok',
      icon: '🥢',
      description: 'Asian stir-fry dishes',
      color: '#f39c12',
      gradient: 'linear-gradient(135deg, #f39c12, #f5b041)'
    },
    {
      label: 'SOUP',
      route: '/products/soup',
      icon: '🍜',
      description: 'Warming bowls of ramen',
      color: '#e74c3c',
      gradient: 'linear-gradient(135deg, #e74c3c, #ec7063)'
    },
    {
      label: 'OTHER',
      route: '/products/other',
      icon: '🍵',
      description: 'Special seasonal items',
      color: '#9b59b6',
      gradient: 'linear-gradient(135deg, #9b59b6, #bb8fce)'
    }
  ];
}
