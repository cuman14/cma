import { MENU } from './../../../../data/menu/menu.constants';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Menu } from 'src/app/core/modules/menu/models/menu.model';
import { ToolUtil } from 'src/app/core/utils/ToolUtils';

@Component({
  selector: 'cma-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  public menu: Menu[] = MENU;
  isMobile = ToolUtil.isMobile();
  constructor() { 
  }

  ngOnInit(): void {
  }

}
