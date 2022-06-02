import { Component,OnInit } from '@angular/core';
import {  Menu, Submenu } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'cma-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../menu.scss']
})
export class MenuComponent implements OnInit   {
  menu$!: Observable<Menu[]>;
  toggle: boolean = true;
  _indexCurrentMenu: number | null = null;
  constructor(private menuService: MenuService, private router: Router) { 
  }


  ngOnInit(): void {
    this.menu$ = this.menuService.getMenu();
  }

  _goToSubMenu(menu: Submenu): void {
    this.router.navigate(['content', menu.code]);
  }

  toogleMenu(event?: Event) {
    setTimeout(() => (this.toggle = !this.toggle));
    this._indexCurrentMenu = null;
    event?.stopPropagation();

  }

  _selectItem(index: number, event: Event): void {
    this._indexCurrentMenu = index;
    event.stopPropagation();
  }
  _closeItem(event: Event) {
    this._indexCurrentMenu = null;
    event.stopPropagation();
  }


}
