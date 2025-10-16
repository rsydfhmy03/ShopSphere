import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs'; 
import { Product } from '../../shared/models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this.cartItemsSubject.asObservable();

  public totalAmount$: Observable<number>;

  constructor() {
    this.totalAmount$ = this.cartItems$.pipe(
      map(items => items.reduce((total, item) => total + (item.product.price * item.quantity), 0))
    );
  }

  addToCart(product: Product): void {
    const currentItems = this.cartItemsSubject.getValue();
    const existingItem = currentItems.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      currentItems.push({ product, quantity: 1 });
    }

    this.cartItemsSubject.next([...currentItems]);
  }

  removeFromCart(productId: number): void {
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = currentItems.filter(item => item.product.id !== productId);
    this.cartItemsSubject.next(updatedItems);
  }

  updateQuantity(productId: number, change: number): void {
    const currentItems = this.cartItemsSubject.getValue();
    const itemToUpdate = currentItems.find(item => item.product.id === productId);

    if (itemToUpdate) {
      itemToUpdate.quantity += change;
      if (itemToUpdate.quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        this.cartItemsSubject.next([...currentItems]);
      }
    }
  }
}