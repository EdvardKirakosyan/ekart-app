import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  standalone: true,
  selector: '[setBackground]'
})
export class SetBackground implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'gray'
    this.element.nativeElement.style.color = 'white'
  }
}