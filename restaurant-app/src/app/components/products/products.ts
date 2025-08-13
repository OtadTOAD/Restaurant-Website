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
import { SelectModule } from 'primeng/select';
import { Rating } from 'primeng/rating';
@Component({
  selector: 'app-products',
  imports: [AsyncPipe, DataView, Tag, ButtonModule, CommonModule, SelectModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  products!: Product[];
  constructor(private productService: ProductService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productType = params.get('type');
      if (productType) {
        this.productService.getProducts(productType).subscribe((data) => {
          this.products = data;
        }
        );
      }
    })
  }
}
