import { CardTitleDirective } from './../../directives/card-title';
import { spin, displace } from './../../rotate.animation';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, OnInit, Query, TemplateRef, ViewChild } from '@angular/core';
import { SubItemDirective } from '../../directives/sub-item';

@Component({
  selector: 'cma-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  animations: [spin, displace]
})
export class CardItemComponent implements OnInit , AfterContentInit, AfterViewInit {

  @ContentChild(SubItemDirective, {static: true}) subItemDirective!: SubItemDirective;

  template!: TemplateRef<SubItemDirective>;
  title!: string;
  subItem!: any[] |undefined;
  toggle: boolean = false;
  constructor() { }


  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.template =  this.subItemDirective.template;
    console.log(this.template);
  }
  ngAfterViewInit(): void {
    this.template =  this.subItemDirective.template;
    console.log(this.template);
  }

  _showItem() {
    this.toggle = !this.toggle;
  }


}
