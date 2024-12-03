import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IGX_CHIPS_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-a-and-b-and-c-or-d',
  imports: [FormsModule, RouterLink, IGX_CHIPS_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './a-and-b-and-c-or-d.component.html',
  styleUrls: ['./a-and-b-and-c-or-d.component.scss']
})
export class AAndBAndCOrDComponent {
  public value: string = '1';
}
