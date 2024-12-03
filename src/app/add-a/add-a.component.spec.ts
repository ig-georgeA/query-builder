import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES } from '@infragistics/igniteui-angular';
import { AddAComponent } from './add-a.component';

describe('AddAComponent', () => {
  let component: AddAComponent;
  let fixture: ComponentFixture<AddAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AddAComponent, NoopAnimationsModule, FormsModule, RouterTestingModule, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
