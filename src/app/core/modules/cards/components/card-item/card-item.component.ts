import { CardTitleDirective } from './../../directives/card-title';
import { spin, displace } from './../../rotate.animation';
import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  Input,
  OnInit,
  Query,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { SubItemDirective } from '../../directives/sub-item';

@Component({
  selector: 'cma-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  animations: [spin, displace],
})
export class CardItemComponent implements OnInit, AfterContentInit {
  @ContentChild(SubItemDirective, { static: true })
  subItemDirective!: SubItemDirective;
  @Input() offOpen: boolean = false;

  template!: TemplateRef<SubItemDirective>;
  title!: string;
  subItem!: any[] | undefined;
  toggle: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.template = this.subItemDirective?.template;
  }

  _showItem() {
    if (this.offOpen) {
      return;
    }
    this.toggle = !this.toggle;
  }
}
