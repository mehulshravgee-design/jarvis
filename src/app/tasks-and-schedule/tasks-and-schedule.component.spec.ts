import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IgxButtonDirective, IgxIconComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IGX_LIST_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IgxSnackbarComponent, IgxSwitchComponent } from 'igniteui-angular';
import { TasksAndScheduleComponent } from './tasks-and-schedule.component';

describe('TasksAndScheduleComponent', () => {
  let component: TasksAndScheduleComponent;
  let fixture: ComponentFixture<TasksAndScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksAndScheduleComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IgxButtonDirective, IgxIconComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IGX_LIST_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IgxSnackbarComponent, IgxSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksAndScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
