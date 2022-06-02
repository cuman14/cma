import { Component, ComponentRef, ElementRef, EventEmitter, HostListener, Inject, NgZone, OnInit, Renderer2, ViewChild } from "@angular/core";
import { AnimationEvent } from "@angular/animations";
import { CdkPortalOutlet, ComponentPortal } from "@angular/cdk/portal";
import { SearchRef } from "../search-ref";
import { _getFocusedElementPierceShadowDom } from "@angular/cdk/platform";
import { slideContent } from "./animations";
import { Submenu } from "../../menu/models/menu.model";
import { Observable } from "rxjs";
import { SearchDataService } from "../search-data.service";

@Component({
  selector: "cma-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
  animations: [slideContent]
})
export class SearchComponent implements OnInit {
  animationState: "void" | "enter" | "leave" = "enter";
  animationStateChanged = new EventEmitter<AnimationEvent>();
  
  @ViewChild("sheet", { static: true }) sheet!: ElementRef;
  @ViewChild(CdkPortalOutlet, { static: true }) _portalOutlet!: CdkPortalOutlet;

  optionsSearch!: Observable<Submenu[] | null>;
  private _elementFocusedBeforeOpened: HTMLElement | null = null;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
      this.close();
  }
  constructor(
    public dialogRef: SearchRef<SearchComponent>,
    private readonly _searchData: SearchDataService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.optionsSearch = this._searchData.getOptionsSearch();
  }

  onAnimationStart(event: AnimationEvent) {
    this.animationStateChanged.emit(event);
  }

  onAnimationDone(event: AnimationEvent) {
    this.animationStateChanged.emit(event);
  }

  startExitAnimation() {
    this.animationState = "leave";
  }
  selectedOptions(selected: Submenu): void {
    this._searchData.selectedOptions(selected);
    this.dialogRef.close();

  }

  close() {
    this._searchData.selectedOptions(null);
    this.dialogRef.close();

  }

}
