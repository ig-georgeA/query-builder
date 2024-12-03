import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IgxButtonDirective, IgxRippleDirective } from '@infragistics/igniteui-angular';
import { InvalidComponent } from './invalid.component';

describe('InvalidComponent', () => {
  let component: InvalidComponent;
  let fixture: ComponentFixture<InvalidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InvalidComponent, NoopAnimationsModule, FormsModule, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IgxButtonDirective, IgxRippleDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
