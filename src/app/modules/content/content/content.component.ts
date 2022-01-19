import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'cma-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  data: any;
  constructor(private readonly _contentService: ContentService) { }

  ngOnInit(): void {
    this._contentService.logContent('3rqaxN0WyVQYHPk1L22Ay0').pipe(map((res) => res.fields)).subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

}
