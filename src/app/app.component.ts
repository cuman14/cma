import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeIn } from './core/animations/router-animations';

@Component({
  selector: 'cma-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeIn]
})
export class AppComponent {
  title = 'cma';

  prepareRoute(outlet: RouterOutlet) {
    return !outlet.isActivated || outlet?.activatedRoute?.snapshot?.params?.id;
  }
}
