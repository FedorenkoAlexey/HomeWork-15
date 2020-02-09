import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[myClickColor]"
})
export class ClickColorDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.cursor = "pointer";
  }
  @HostBinding("class.clicked") isClicked: boolean = false;

  @HostListener("mousedown") onMouseDown() {
    this.isClicked = true;
  }
  @HostListener("mouseup") onMouseUp() {
    this.isClicked = false;
  }
}
