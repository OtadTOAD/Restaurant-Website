import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/products';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { CustomDialogComponent } from '../../dialogs/custom-dialog-component/custom-dialog-component';
import { PLACEHOLDER_PRODUCT, PRODUCT_TYPE_OPTIONS } from '../../config/config';
import { ProductsNavBar, ProductType } from '../products-nav-bar/products-nav-bar';



@Component({
  selector: 'app-products',
  imports: [CurrencyPipe, CommonModule, CustomDialogComponent, ProductsNavBar],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  showDialog: boolean = false;
  chosenProduct: Product = PLACEHOLDER_PRODUCT;
  productTypes: ProductType[] = PRODUCT_TYPE_OPTIONS;
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


  handleShowDialog(product: Product) {
    this.chosenProduct = product;
    this.showDialog = true;
  }
}
