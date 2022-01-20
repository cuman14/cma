import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content/content.component';
import { MdToHtmlPipe } from './content/md-to-html.pipe';


@NgModule({
  declarations: [
    ContentComponent,
    MdToHtmlPipe
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
