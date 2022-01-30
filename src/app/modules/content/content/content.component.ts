import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { ContentService } from "../content.service";
import { delay, map } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { animate, style, transition, trigger } from "@angular/animations";
import { fadeIn } from "src/app/core/animations/router-animations";

const KEY_ENTRY_ID = 'entryId';
@Component({
  selector: "cma-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeIn]

})
export class ContentComponent implements OnInit, OnDestroy {
  data: any;
  content: any;
  conentEsp: any;
  noContent!: string;
  changeUrl$!: Subscription;
  constructor(
    private readonly _contentService: ContentService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {

    this.changeUrl$ = this.route.url.subscribe(url => { 
      const entryId = url[0].path || sessionStorage.getItem(KEY_ENTRY_ID) as string;
      console.log(entryId);
      if(entryId !=='undefined') {
        this._getContentEntry(entryId);
      } else {
        this.noContent = 'Pronto tendrás la información que deseas!'
      }
    });


  }

  private _getContentEntry(entryId: string) {
    sessionStorage.setItem(KEY_ENTRY_ID,entryId);
    this._contentService
      .getContent(entryId)
      .pipe(map((res) => res.fields))
      .subscribe((data) => {
        this.data = data;
        this.content = this.data.body.content.map((field: any) => field.data?.target?.fields).filter((el: any) => !!el);
        console.log(this.content);
       
      });
  }
  ngOnDestroy(): void {
      sessionStorage.removeItem(KEY_ENTRY_ID);
      this.changeUrl$.unsubscribe();
    
  }
}
