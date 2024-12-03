import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES } from '@infragistics/igniteui-angular';
import { AAndBAndCComponent } from './a-and-b-and-c.component';

describe('AAndBAndCComponent', () => {
  let component: AAndBAndCComponent;
  let fixture: ComponentFixture<AAndBAndCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AAndBAndCComponent, NoopAnimationsModule, FormsModule, RouterTestingModule, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AAndBAndCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
