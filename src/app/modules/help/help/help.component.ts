import { INFO_HELP } from './../info-help.constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cma-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  infoHelp = INFO_HELP;
  constructor() { }

  ngOnInit(): void {
  }

}
