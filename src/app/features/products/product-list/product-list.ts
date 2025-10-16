import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { ApiService } from '../../../core/services/api.service';
import { ProductCard } from '../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList implements OnInit{
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
