import { hamburgerButton, hamburgerButtonChildUp, hamburgerButtonChildDown } from './../../menu-animation';
import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'cma-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [hamburgerButton, hamburgerButtonChildUp, hamburgerButtonChildDown]
})
export class MenuComponent implements OnInit {

  @Input() menu!: Menu[];
  toggle: boolean = true;
  
  constructor() { }

  ngOnInit(): void {

  }

  openMenu() {
    this.toggle = !this.toggle;
  }

}
