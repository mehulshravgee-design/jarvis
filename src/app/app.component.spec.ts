import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxButtonDirective, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxBadgeComponent, IgxSwitchComponent, IGX_SELECT_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IgxSnackbarComponent } from 'igniteui-angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule, IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxButtonDirective, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxBadgeComponent, IgxSwitchComponent, IGX_SELECT_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IgxSnackbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
