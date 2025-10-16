import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { ApiService } from '../../../core/services/api.service';
import { ProductCard } from '../../../shared/components/product-card/product-card';
import { combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList implements OnInit{
    products$!: Observable<Product[]>;
    constructor(private apiServices : ApiService) {};

    ngOnInit(): void {
      const allProducts$ = this.apiServices.getProducts();
      const searchTerm$ = this.apiServices.searchTerm$;
      this.products$ = combineLatest([allProducts$, searchTerm$]).pipe(
      map(([products, term]) => 
        products.filter(product => 
          product.title.toLowerCase().includes(term.toLowerCase())
        )
      )
    );
    }
}
