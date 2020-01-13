import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[app-container]'
})
export class ContainerDirective {

  constructor(private el: ElementRef) {

    el.nativeElement.style.display = "flex";
   }

}
