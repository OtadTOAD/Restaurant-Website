import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DataView } from 'primeng/dataview';
import { Tag } from 'primeng/tag';
@Component({
  selector: 'app-products',
  imports: [AsyncPipe, DataView, Tag, ButtonModule, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  products$!: Observable<Product[] | undefined>;
  constructor(private productService: ProductService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productType = params.get('type');
      if (productType) {
        this.products$ = this.productService.getProducts(productType);
      }
    })
  }
}
