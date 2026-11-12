import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { IgxButtonDirective, IgxIconComponent, IGX_BANNER_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES, IgxBadgeComponent, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxSwitchComponent, IGX_SELECT_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxSnackbarComponent } from 'igniteui-angular';
import { CommandCenterComponent } from './command-center.component';

describe('CommandCenterComponent', () => {
  let component: CommandCenterComponent;
  let fixture: ComponentFixture<CommandCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandCenterComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule, IgxButtonDirective, IgxIconComponent, IGX_BANNER_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES, IgxBadgeComponent, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxSwitchComponent, IGX_SELECT_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxSnackbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
