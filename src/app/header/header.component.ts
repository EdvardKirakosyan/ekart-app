import { Component } from '@angular/core';
import { TopMenuComponent } from './top-menu/top-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  clickHandle() {
    alert('ssss!!!!!');
  }
  title = '--ABC--';
}
