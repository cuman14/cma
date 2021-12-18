import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[subItem]' })
export class SubItemDirective {

    constructor(public template: TemplateRef<any>) { }
}