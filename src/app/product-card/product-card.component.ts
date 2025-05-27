import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  
  @Input() product!: Product; //Receives product from parent
  @Output() addToCart = new EventEmitter<Product>();
  @Output() viewDetails = new EventEmitter<number>(); // emits product id

  constructor(private router: Router) {}
  onViewDetails() {
    this.router.navigate(['/products', this.product.id]);
    console.log(this.product)
  }
  onAddToCart() {
    this.addToCart.emit(this.product); //Triggered when button is clicked
  }
}
