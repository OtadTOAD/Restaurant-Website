import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  currProducts: Product[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getProducts(type: string) {
    this.http.get<Product[]>(`/assets/products/${type}.json`).subscribe(data => {
      this.currProducts = data
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productType = params.get('type');
      if (productType) {
        this.getProducts(productType);
      }
    })
  }
}
