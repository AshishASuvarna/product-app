import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Laptop', price: 1000, description: 'High performance laptop' },
    { id: 2, name: 'Phone', price: 600, description: 'Smartphone with excellent camera' },
    { id: 3, name: 'Headphones', price: 150, description: 'Noise-cancelling headphones' }
  ];

  constructor() { }
  getProducts(): Observable<Product[]> {
    return of(this.products); // simulates async data
  }
}
