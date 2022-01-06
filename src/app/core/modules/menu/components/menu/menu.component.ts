import { hamburgerButton, hamburgerButtonChildUp, hamburgerButtonChildDown, expand, smoothHeight } from './../../menu-animation';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Menu } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';
import { MenuBase } from '../menu-base';

@Component({
  selector: 'cma-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../menu.scss']
})
export class MenuComponent extends MenuBase implements OnInit   {

  constructor(private menuService: MenuService) { 
    super(menuService);
  }


  ngOnInit(): void {
      this.getMenu();
  }



}
