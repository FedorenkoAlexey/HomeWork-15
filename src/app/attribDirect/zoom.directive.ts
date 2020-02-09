import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[zoom]"
})
export class ZoomDirective {
  constructor(private element: ElementRef) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.changeSize(18);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.changeSize(12);
  }

  changeSize(size: number | string): void {
    this.element.nativeElement.style.fontSize = `${size}px`;
  }
}
