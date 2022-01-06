import { Menu } from './../models/menu.model';
import { Input, Component } from '@angular/core';
import { MenuService } from '../services/menu.service';
@Component({
    selector: 'cma-menu-base',
    template: `<div></div>`
})
export class MenuBase {
    
   menu!: Menu[];
    toggle: boolean = true;
    _indexCurrentMenu: number |null = null;
     
    constructor(private _menuService: MenuService) { }


    getMenu() {
        this._menuService.getMenu().subscribe(data=> {
            this.menu = data;
        });  
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