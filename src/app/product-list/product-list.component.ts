import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  product = {
    name: 'Iphone 13',
    color: 'red',
    price: 455,
    discount: 8.5,
    inStock: 5,
  };

  getDiscount() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }
}
