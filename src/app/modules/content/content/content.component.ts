import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'cma-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private readonly _contentService: ContentService) { }

  ngOnInit(): void {
    this._contentService.logContent('3rqaxN0WyVQYHPk1L22Ay0');
  }

}
