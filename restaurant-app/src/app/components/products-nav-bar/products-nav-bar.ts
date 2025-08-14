
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';

export interface ProductType {
  label: string;
  icon: string,
  slug: string; // used in URL
}

@Component({
  selector: 'app-products-nav-bar',
  imports: [RouterLinkActive, RouterLink, CommonModule, TranslocoPipe],
  templateUrl: './products-nav-bar.html',
  styleUrls: ['./products-nav-bar.css']
})
export class ProductsNavBar {
  @Input() types: ProductType[] = [];
}

