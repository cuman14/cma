import { Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";
import {
  CdkPortalOutlet,
  ComponentPortal,
  ComponentType,
} from "@angular/cdk/portal";
import {
  ComponentRef,
  Injectable,
  Injector,
  Renderer2,
  StaticProvider,
} from "@angular/core";
import { SearchDataService } from "./search-data.service";
import { SearchRef } from "./search-ref";
import { SEARCH_DATA } from "./search.overlay.token";
import { SearchComponent } from "./search/search.component";

export interface DialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  classBkg?: string;
  backdropClass?: string;
  data?: any;
  panelClassInner?: string;
  disableClose?: boolean;
}

const DEFAULT_CONFIG: DialogConfig = {
  hasBackdrop: true,
  backdropClass: "dark-backdrop",
  panelClass: "wrapper__search",
  disableClose: true,
};

@Injectable({
  providedIn: "root",
})
export class SearchService {
  private _ref!: SearchRef<any>;

  constructor(private overlay: Overlay, private readonly searchData: SearchDataService) {}

  open<T, D = any, R = any>(config: DialogConfig = {}) {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    const _overlayRef = this.createOverlay(dialogConfig);
    // Instantiate remote control
    if(!this._ref?.overlayRef.hasAttached()) {
      this._ref = new SearchRef(_overlayRef, dialogConfig);

      const overlayComponent = this.attachDialogContainer(
        _overlayRef,
        dialogConfig,
        this._ref
      );
      this._ref.containerInstance = overlayComponent;
      this._ref.instance = overlayComponent;
    } else {
      this._ref.containerInstance?.dialogRef.close();
    }

    // Subscribe to a stream that emits when the backdrop was clicked
/*     this._ref.backdropClick().subscribe((_) => this._ref.close());
 */    // Pass the instance of the overlay component to the remote control
    /* return this._ref; */
  }

  activeSearch() {
    return this.searchData.activeSearch();
  }
  close() {
    if(!this._ref) {
      return;
    }
    this._ref.containerInstance?.dialogRef.close();

  }

  private createOverlay(config: DialogConfig) {
    // Returns an OverlayConfig
    const overlayConfig = this.getOverlayConfig(config);

    // Returns an OverlayRef
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(config: DialogConfig): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy,
    });

    return overlayConfig;
  }

  private createInjector<T>(config: DialogConfig, dialogRef: SearchRef<T>) {
    const providers: StaticProvider[] = [
      { provide: SearchRef, useValue: dialogRef },
      { provide: SEARCH_DATA, useValue: config.data },
    ];

    return Injector.create({ providers });
  }

  private attachDialogContainer(
    overlayRef: OverlayRef,
    config: DialogConfig,
    dialogRef: SearchRef<any>
  ) {
    const injector = this.createInjector(config, dialogRef);
    const containerPortal = new ComponentPortal(
      SearchComponent,
      null,
      injector
    );

    const containerRef: ComponentRef<SearchComponent> = overlayRef.attach(
      containerPortal
    );

    return containerRef.instance;
  }

  
}
