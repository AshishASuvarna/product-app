import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  handleAddToCart(product: Product) {
    console.log('Added to cart:', product);
  }
  handleViewDetails(productId: number) {
    console.log('View details for product ID:', productId);
    // Later: this.router.navigate(['/products', productId]);
  }
  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
