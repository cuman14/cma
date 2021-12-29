import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'cma-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menu!: Menu[];
  toogle: boolean = true;
  
  constructor() { }

  ngOnInit(): void {

  }

  openMenu() {
    this.toogle = !this.toogle;
  }

}
