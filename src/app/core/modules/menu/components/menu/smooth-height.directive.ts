import { Directive, ElementRef, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[trigger]',
  host: { '[style.display]': '"block"', '[style.overflow]': '"hidden"' }

})
export class SmoothHeightDirective implements OnChanges {

  @Input() trigger!: any;
  
  startHeight!: number;

  constructor(private element: ElementRef) {}

  @HostBinding('@grow')
  get grow() { 
    console.log(this.startHeight);
    return { value: this.trigger, params: { startHeight: this.startHeight } };
  }

  setStartHeight() {
    this.startHeight = this.element.nativeElement.clientHeight;
  }

  ngOnChanges(changes: any) {
    this.setStartHeight();
  }

}
