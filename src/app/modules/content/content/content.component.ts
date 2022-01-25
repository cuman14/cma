import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { ContentService } from "../content.service";
import { map } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";

const KEY_ENTRY_ID = 'entryId';
@Component({
  selector: "cma-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
  encapsulation: ViewEncapsulation.None

})
export class ContentComponent implements OnInit, OnDestroy {
  data: any;
  content: any;
  conentEsp: any;
  constructor(
    private readonly _contentService: ContentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const entryId = this.route.snapshot.paramMap.get(KEY_ENTRY_ID) || sessionStorage.getItem(KEY_ENTRY_ID) as string;
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
    
  }
}
