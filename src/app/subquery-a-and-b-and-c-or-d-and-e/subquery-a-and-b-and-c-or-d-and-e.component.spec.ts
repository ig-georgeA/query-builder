import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_CHIPS_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES } from '@infragistics/igniteui-angular';
import { SubqueryAAndBAndCOrDAndEComponent } from './subquery-a-and-b-and-c-or-d-and-e.component';

describe('SubqueryAAndBAndCOrDAndEComponent', () => {
  let component: SubqueryAAndBAndCOrDAndEComponent;
  let fixture: ComponentFixture<SubqueryAAndBAndCOrDAndEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SubqueryAAndBAndCOrDAndEComponent, NoopAnimationsModule, FormsModule, RouterTestingModule, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_CHIPS_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubqueryAAndBAndCOrDAndEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
