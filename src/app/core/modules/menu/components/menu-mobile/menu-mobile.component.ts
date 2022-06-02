import { expand, hamburgerButton, hamburgerButtonChildDown, smoothHeight } from './../../menu-animation';
import { MenuService } from './../../services/menu.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { hamburgerButtonChildUp } from '../../menu-animation';
import { Menu, Submenu } from '../../models/menu.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'cma-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['../menu.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [hamburgerButtonChildUp, hamburgerButtonChildDown,hamburgerButton, expand, smoothHeight]
})
export class MenuMobileComponent implements OnInit {
  menu!: Menu[];
  toggle: boolean = true;
  _indexCurrentMenu: number | null = null;

  constructor(private menuService: MenuService,
    private cf:ChangeDetectorRef,
    private router: Router) { 
  }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(res =>{
        this.menu = res
        this.cf.detectChanges();
        console.log('menu llamada', res);
    });
  }

  _goToSubMenu(event: any, menu: Submenu): void {
    this.router.navigate(['content', menu.code]);
    this.toogleMenu(event);
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
