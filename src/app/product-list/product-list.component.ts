import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  // name = '';
  addToCart: number = 0;
  product = {
    name: 'Iphone 13',
    color: 'red',
    price: 455,
    discount: 8.5,
    inStock: 5,
    pImage: '/assets/images/iphone.png',
  };

  getDiscount() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }

  onNameChange(event: any) {
    // this.name = event.target.value;
  }

  decrementCart() {
    this.addToCart > 0 && this.addToCart--;
  }

  incrementCart() {
    this.addToCart < this.product.inStock && this.addToCart++;
  }
}
