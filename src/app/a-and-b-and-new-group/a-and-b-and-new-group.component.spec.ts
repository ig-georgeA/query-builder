import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_DROP_DOWN_DIRECTIVES } from '@infragistics/igniteui-angular';
import { AAndBAndNewGroupComponent } from './a-and-b-and-new-group.component';

describe('AAndBAndNewGroupComponent', () => {
  let component: AAndBAndNewGroupComponent;
  let fixture: ComponentFixture<AAndBAndNewGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AAndBAndNewGroupComponent, NoopAnimationsModule, FormsModule, RouterTestingModule, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_DROP_DOWN_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AAndBAndNewGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
