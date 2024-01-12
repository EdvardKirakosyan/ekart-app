import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'container',
  standalone: true,
  imports: [SearchComponent, CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  qlistOfString: string[] = ['mark', 'cccc', 'ddd', 'eee', 'yyy'];
}
