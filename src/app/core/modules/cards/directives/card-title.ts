import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[cardTitle]' })
export class CardTitleDirective {
    @Input() cardTitle!: string;

    constructor(vc: ViewContainerRef) { }
}