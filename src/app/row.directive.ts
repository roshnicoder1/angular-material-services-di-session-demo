import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[app-row]'
})
export class RowDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.flexDirection = "row";
    el.nativeElement.style.justifyContent = "space-between";
   }

}
