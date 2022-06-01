import { Observable, Subject } from "rxjs";
import { DialogConfig } from "./search.service";
import { SearchComponent } from "./search/search.component";
import { OverlayRef } from "@angular/cdk/overlay";
import { filter, take } from "rxjs/operators";
import { AnimationEvent } from "@angular/animations";
export class SearchRef<T> {
  /** Instance of the component making up the content of the bottom sheet. */
  instance!: T;

  containerInstance!: SearchComponent;

  overlayRef!: OverlayRef;

  private _beforeClose = new Subject<void>();
  private _afterClosed = new Subject<void>();

  /** Whether the user is allowed to close the bottom sheet. */
  disableClose: boolean | undefined;
  private _data: any;
  private _config: DialogConfig;

  constructor(private _overlayRef: OverlayRef, config: DialogConfig) {
    this.overlayRef = _overlayRef;
    this._config = config || {};
    this.disableClose = config.disableClose;
  }

  get config() {
    return this._config;
  }

  close(data?: any): void {
    this._data = data;
    this._animationBeforeClose();
    this._animationAfterClosed();
    this.containerInstance.startExitAnimation();
  }

  // Animate componente when it is closing
  private _animationBeforeClose() {
    this.containerInstance.animationStateChanged
      .pipe(
        filter((event: AnimationEvent) => event.phaseName === "start"),
        take(1)
      )
      .subscribe(() => {
        this._beforeClose.next();
        this._beforeClose.complete();
        this.overlayRef.detachBackdrop();
      });
  }
  private _animationAfterClosed() {
    this.containerInstance.animationStateChanged
      .pipe(
        filter(
          (event: AnimationEvent) =>
            event.phaseName === "done" && event.toState === "leave"
        ),
        take(1)
      )
      .subscribe(() => {
        this.overlayRef.dispose();
        this.overlayRef.detach();

        this._afterClosed.next(this._data);
        this._afterClosed.complete();
        this.containerInstance = null as any;
      });

    this.overlayRef.backdropClick().subscribe((event) => {
      if (!this.disableClose && event.type !== "keydown") {
        event.preventDefault();
        this.close();
      }
    });
  }

  afterClosed(): Observable<void> {
    return this._afterClosed.asObservable();
  }

  beforeClose(): Observable<void> {
    return this._beforeClose.asObservable();
  }

  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick(): Observable<MouseEvent> {
    return this.overlayRef.backdropClick();
  }

  
}
