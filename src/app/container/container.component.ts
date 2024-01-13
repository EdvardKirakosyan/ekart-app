import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@Component({
  selector: 'container',
  standalone: true,
  imports: [SearchComponent, CommonModule, ProductListComponent, ProductDetailComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  listOfString: string[] = ['mark', 'cccc', 'ddd', 'eee', 'yyy'];

  searchText: string = ''

  setSearchText(value: string) {
    this.searchText = value
  }
}
