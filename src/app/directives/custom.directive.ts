import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true
})
export class CustomDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = "cyan";
    console.log("custom çalıştı");
  }

}
