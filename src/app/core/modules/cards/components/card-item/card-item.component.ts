import { CardTitleDirective } from './../../directives/card-title';
import { spin, displace } from './../../rotate.animation';
import { AfterContentInit, AfterViewInit, Component, ContentChild, OnInit, Query, TemplateRef, ViewChild } from '@angular/core';
import { SubItemDirective } from '../../directives/sub-item';

@Component({
  selector: 'cma-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  animations: [spin, displace]
})
export class CardItemComponent implements OnInit , AfterContentInit{

  @ViewChild(TemplateRef, {static: true}) subItemDirective!: TemplateRef<SubItemDirective>;

  title!: string;
  subItem!: any[] |undefined;
  toggle: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.subItemDirective);
  }
  _showItem() {
    this.toggle = !this.toggle;
  }


}
