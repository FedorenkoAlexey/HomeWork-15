import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[myTimeout]"
})
export class TimeoutDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input("myTimeout") set setMyTimeout(time: number) {
    setTimeout(() => {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, time);
  }
}
