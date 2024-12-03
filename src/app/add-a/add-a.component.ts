import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-add-a',
  imports: [FormsModule, RouterLink, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './add-a.component.html',
  styleUrls: ['./add-a.component.scss']
})
export class AddAComponent {
  public value: string = '1';
  public value1: string = 'test';
}
