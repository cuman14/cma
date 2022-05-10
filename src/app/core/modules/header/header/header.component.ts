import { Component, OnInit, OnChanges } from '@angular/core';
import { SearchService } from '../../search/search.service';

@Component({
  selector: 'cma-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _search: SearchService) { }

  ngOnInit(): void {
    this._search.activeSearch().subscribe((res : boolean) => {
      if(res) {
      } 
    })
  }



}
