import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsModule } from './../cards/cards.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    CardsModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
