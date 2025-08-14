import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/products';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { ProductMoreDialogs } from '../../dialogs/product-more-dialogs/product-more-dialogs';
@Component({
  selector: 'app-products',
  imports: [CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  @ViewChild("productDialog") productDialog!: ProductMoreDialogs;


  products!: Product[];
  showMoreDialogVisible: boolean = false;

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


  handleShowMoreButton(product: Product) {
    this.productDialog.product = product;
    this.showMoreDialogVisible = true;
  }
}
