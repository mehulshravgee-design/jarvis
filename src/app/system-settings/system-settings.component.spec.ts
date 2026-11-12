import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxBadgeComponent, IgxButtonDirective, IgxIconComponent, IGX_BANNER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IgxSwitchComponent, IGX_CARD_DIRECTIVES, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxSnackbarComponent } from 'igniteui-angular';
import { SystemSettingsComponent } from './system-settings.component';

describe('SystemSettingsComponent', () => {
  let component: SystemSettingsComponent;
  let fixture: ComponentFixture<SystemSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemSettingsComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent, IGX_BANNER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IgxSwitchComponent, IGX_CARD_DIRECTIVES, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxSnackbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
