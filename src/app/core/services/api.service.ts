import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { Product } from '../../shared/models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = 'https://fakestoreapi.com';
  constructor(private http: HttpClient) { }

  private searchSubject = new BehaviorSubject<string>('');
  public searchTerm$ = this.searchSubject.asObservable();

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  setSearchTerm(term: string): void {
    this.searchSubject.next(term);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`);
  }
}
