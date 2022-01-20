import { expand, hamburgerButton, hamburgerButtonChildDown, smoothHeight } from './../../menu-animation';
import { MenuService } from './../../services/menu.service';
import { Component, OnInit } from '@angular/core';
import { MenuBase } from '../menu-base';
import { hamburgerButtonChildUp } from '../../menu-animation';
import { Submenu } from '../../models/menu.model';
import { Router } from '@angular/router';

@Component({
  selector: 'cma-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['../menu.scss'],
  animations: [hamburgerButtonChildUp, hamburgerButtonChildDown,hamburgerButton, expand, smoothHeight]
})
export class MenuMobileComponent  extends MenuBase implements OnInit {

  constructor(private menuService: MenuService,private router: Router) { 
    super(menuService);
  }

  ngOnInit(): void {
    this.getMenu();
  }

  _goToSubMenu(event: any, menu: Submenu): void {
    this.router.navigate(['content']);
    this.toogleMenu(event);
  }

}
