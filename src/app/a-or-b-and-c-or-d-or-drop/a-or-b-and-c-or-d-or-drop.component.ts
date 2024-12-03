import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IGX_CHIPS_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-a-or-b-and-c-or-d-or-drop',
  imports: [FormsModule, RouterLink, IGX_CHIPS_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './a-or-b-and-c-or-d-or-drop.component.html',
  styleUrls: ['./a-or-b-and-c-or-d-or-drop.component.scss']
})
export class AOrBAndCOrDOrDropComponent {
  public value: string = '1';
}
