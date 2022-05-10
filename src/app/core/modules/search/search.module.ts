import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { BrowserModule } from '@angular/platform-browser';
import { SearchIconComponent } from './search-icon/search-icon.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SearchComponent,
    SearchIconComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    BrowserModule,
    RouterModule
  ],
  exports: [
    SearchIconComponent
  ]
})
export class SearchModule { }
