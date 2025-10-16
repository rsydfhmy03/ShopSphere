import { Component } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { CommonModule, NgClass } from '@angular/common';
import { CartService } from '../../../core/services/cart.service';
import { map, Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  cartItemCount$!: Observable<number>;
  isMenuOpen = false;
  
  constructor(private apiService: ApiService, private cartService : CartService) {
    this.cartItemCount$ = this.cartService.cartItems$.pipe(
      map((items: any[]) => items.reduce((count, item) => count + item.quantity, 0))
    );
  }

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const searchTerm = inputElement.value;
    this.apiService.setSearchTerm(searchTerm);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}