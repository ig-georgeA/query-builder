import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxOverlayOutletDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxOverlayOutletDirective, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
