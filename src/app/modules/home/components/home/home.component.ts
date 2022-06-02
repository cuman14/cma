import { ToolUtil } from '../../../../core/utils/ToolUtils';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cma-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  isMobile = ToolUtil.isMobile();
  constructor() { 
    console.log(this.isMobile);
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
