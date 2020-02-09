import { Directive, ElementRef, OnInit, Input } from "@angular/core";

@Directive({
  selector: "[color]"
})
export class BalanceColorDirective implements OnInit {
  constructor(private element: ElementRef) {
    // console.log(element);
    // console.log(element.nativeElement.textContent);
  }

  @Input("color") set changeColor(color: string) {
    this.element.nativeElement.style.color = color;
  }
  ngOnInit() {
    // this.element.nativeElement.style.color = "green";
  }
}
