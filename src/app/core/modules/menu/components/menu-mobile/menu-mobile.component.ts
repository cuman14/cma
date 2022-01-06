import { expand, hamburgerButton, hamburgerButtonChildDown, smoothHeight } from './../../menu-animation';
import { MenuService } from './../../services/menu.service';
import { Component, OnInit } from '@angular/core';
import { MenuBase } from '../menu-base';
import { hamburgerButtonChildUp } from '../../menu-animation';

@Component({
  selector: 'cma-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['../menu.scss'],
  animations: [hamburgerButtonChildUp, hamburgerButtonChildDown,hamburgerButton, expand, smoothHeight]
})
export class MenuMobileComponent  extends MenuBase implements OnInit {

  constructor(private menuService: MenuService) { 
    super(menuService);
  }

  ngOnInit(): void {
  }

}
