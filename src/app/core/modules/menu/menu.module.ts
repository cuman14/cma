import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsModule } from './../cards/cards.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { SmoothHeightDirective } from './components/menu/smooth-height.directive';




@NgModule({
  declarations: [
    MenuComponent,
    SmoothHeightDirective,
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
