import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[app-col]'
})
export class ColDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.flexDirection = "column";
    el.nativeElement.style.alignItems = "center";
  }

}
