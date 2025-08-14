
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface ProductType {
  label: string;
  slug: string; // used in URL
}

@Component({
  selector: 'app-products-nav-bar',
  imports: [RouterLinkActive, RouterLink, CommonModule],
  templateUrl: './products-nav-bar.html',
  styleUrls: ['./products-nav-bar.css']
})
export class ProductsNavBar {
  @Input() types: ProductType[] = [];
}

