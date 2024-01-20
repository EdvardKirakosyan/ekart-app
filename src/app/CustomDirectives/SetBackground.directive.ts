import { Directive, ElementRef } from "@angular/core";

@Directive({
  standalone: true,
  selector: '[setBackground]'
})
export class SetBackground {
  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'red'
  }
}