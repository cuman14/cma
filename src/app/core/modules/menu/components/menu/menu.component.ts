import { hamburgerButton, hamburgerButtonChildUp, hamburgerButtonChildDown, expand, smoothHeight } from './../../menu-animation';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'cma-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [hamburgerButton, hamburgerButtonChildUp, hamburgerButtonChildDown, expand, smoothHeight]
})
export class MenuComponent implements OnInit {

  @Input() menu!: Menu[];
  toggle: boolean = true;
  _indexCurrentMenu: number |null = null;

  constructor() { }


  ngOnInit(): void {

  }

  openMenu() {
    this.toggle = !this.toggle;
    this._indexCurrentMenu = null;
  }

  _selectItem(index: number, event: Event): void {
    this._indexCurrentMenu = index;
    event.stopPropagation();
  }
  _closeItem( event: Event) {
    this._indexCurrentMenu = null;
    event.stopPropagation();
  }

}
