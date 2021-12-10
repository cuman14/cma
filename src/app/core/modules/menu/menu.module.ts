import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { CardItemComponent } from './card-item/card-item.component';



@NgModule({
  declarations: [
    MenuComponent,
    CardItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    CardItemComponent
  ]
})
export class MenuModule { }
