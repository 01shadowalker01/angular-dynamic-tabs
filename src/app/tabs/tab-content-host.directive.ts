import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[tabContentHost]"
})
export class TabContentHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
