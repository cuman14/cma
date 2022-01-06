import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsModule } from './../cards/cards.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { SmoothHeightDirective } from './components/menu/smooth-height.directive';
import { MenuMobileComponent } from './components/menu-mobile/menu-mobile.component';




@NgModule({
  declarations: [
    MenuComponent,
    SmoothHeightDirective,
    MenuMobileComponent,
  ],
  imports: [
    CommonModule,
    CardsModule
  ],
  exports: [
    MenuComponent,
    MenuMobileComponent
  ]
})
export class MenuModule { }
