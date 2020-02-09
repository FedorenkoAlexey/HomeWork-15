import { Directive, ElementRef, Input, AfterViewInit } from "@angular/core";

@Directive({
  selector: "[color]"
})
export class BalanceColorDirective implements AfterViewInit {
  balance: any;
  constructor(private element: ElementRef) {}

  // @Input("color") set changeColor(color: string) {
  //   this.element.nativeElement.style.color = color;
  //   console.log("1");
  // }

  ngAfterViewInit() {
    let balance = this.element.nativeElement.textContent;
    balance > "0"
      ? (this.element.nativeElement.style.color = "green")
      : (this.element.nativeElement.style.color = "red");
  }
}
