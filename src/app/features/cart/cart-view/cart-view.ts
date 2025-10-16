
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService, CartItem } from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart-view.html',
  styleUrl: './cart-view.scss'
})
export class CartView {
  cartItems$: Observable<CartItem[]>;
  totalAmount$: Observable<number>;

  constructor(private cartService: CartService) {
    this.cartItems$ = this.cartService.cartItems$;
    this.totalAmount$ = this.cartService.totalAmount$;
  }

  onRemoveItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  onIncreaseQuantity(productId: number): void {
    this.cartService.updateQuantity(productId, 1); 
  }

  onDecreaseQuantity(productId: number): void {
    this.cartService.updateQuantity(productId, -1); 
  }
}