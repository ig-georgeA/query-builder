import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES } from '@infragistics/igniteui-angular';
import { AAndBComponent } from './a-and-b.component';

describe('AAndBComponent', () => {
  let component: AAndBComponent;
  let fixture: ComponentFixture<AAndBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AAndBComponent, NoopAnimationsModule, FormsModule, RouterTestingModule, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AAndBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
