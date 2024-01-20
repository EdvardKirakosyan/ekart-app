import { Component, Input } from '@angular/core';
import { Product } from "../../Models/Product";
import { ProductListComponent } from "../product-list/product-list.component";
import { CommonModule } from "@angular/common";
import { SetBackground } from "../../CustomDirectives/SetBackground.directive";

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [CommonModule, SetBackground],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() productListComp: ProductListComponent = undefined

  product: Product

  ngOnInit() {
    this.product = this.productListComp.selectedProduct
  }
}
