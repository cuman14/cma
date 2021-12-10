import { MENU } from './../../../../data/menu/menu.constants';
import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/core/modules/menu/models/menu.model';

@Component({
  selector: 'cma-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public menu: Menu[] = MENU;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
