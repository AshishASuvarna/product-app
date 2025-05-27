import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  sampleProduct = {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    description: 'High-quality wireless headphones with noise cancellation.'
  };
  
  handleAddToCart(product: Product) {
    console.log('Product added to cart!',product);
  }
}
