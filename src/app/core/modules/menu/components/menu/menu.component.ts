import { hamburgerButton, hamburgerButtonChildUp, hamburgerButtonChildDown, expand, smoothHeight } from './../../menu-animation';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Menu, Submenu } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';
import { MenuBase } from '../menu-base';
import { Router } from '@angular/router';

@Component({
  selector: 'cma-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../menu.scss']
})
export class MenuComponent extends MenuBase implements OnInit   {

  constructor(private menuService: MenuService, private router: Router) { 
    super(menuService);
  }


  ngOnInit(): void {
      this.getMenu();
  }

  _goToSubMenu(menu: Submenu): void {
    this.router.navigate(['content', menu.code]);
  }



}
