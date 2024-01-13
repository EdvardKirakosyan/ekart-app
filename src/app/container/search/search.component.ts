import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = ''

  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>()

  onSearchTextChange() { }

  updateSearchText(inputEl: HTMLInputElement) {
    this.searchText = inputEl.value
    this.searchTextChange.emit(this.searchText)
  }
}
