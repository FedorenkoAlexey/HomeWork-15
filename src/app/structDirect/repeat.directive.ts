import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[myRepeat]"
})
export class RepeatDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input("myRepeat") set repeat(value: number) {
    for (let i = 0; i < value; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
