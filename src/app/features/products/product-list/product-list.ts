import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
    products : Product[] = [];

    constructor(private apiServices : ApiService) {};

    ngOnInit(): void {
      this.apiServices.getProducts().subscribe((data: Product[]) =>
      {
        this.products = data;
        console.log(this.products);
      })
    }
}
