import { CardTitleDirective } from './directives/card-title';
import { SubItemDirective } from './directives/sub-item';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from './components/card-item/card-item.component';



@NgModule({
  declarations: [CardItemComponent, SubItemDirective, CardTitleDirective],
  imports: [
    CommonModule
  ],
  exports: [CardItemComponent, SubItemDirective, CardTitleDirective]
})
export class CardsModule { }
