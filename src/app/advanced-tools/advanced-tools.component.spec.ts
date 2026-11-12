import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IgxBadgeComponent, IgxButtonDirective, IgxIconComponent, IGX_BUTTON_GROUP_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IGX_GRID_DIRECTIVES, IgxSnackbarComponent, IGX_DIALOG_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IgxSwitchComponent } from 'igniteui-angular';
import { AdvancedToolsComponent } from './advanced-tools.component';

describe('AdvancedToolsComponent', () => {
  let component: AdvancedToolsComponent;
  let fixture: ComponentFixture<AdvancedToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedToolsComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent, IGX_BUTTON_GROUP_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IGX_GRID_DIRECTIVES, IgxSnackbarComponent, IGX_DIALOG_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IgxSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
