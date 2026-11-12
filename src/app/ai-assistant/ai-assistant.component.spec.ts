import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxBadgeComponent, IgxSwitchComponent, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IGX_CHIPS_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconButtonDirective, IGX_DIALOG_DIRECTIVES, IgxSnackbarComponent } from 'igniteui-angular';
import { AIAssistantComponent } from './ai-assistant.component';

describe('AIAssistantComponent', () => {
  let component: AIAssistantComponent;
  let fixture: ComponentFixture<AIAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIAssistantComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxBadgeComponent, IgxSwitchComponent, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IGX_CHIPS_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconButtonDirective, IGX_DIALOG_DIRECTIVES, IgxSnackbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AIAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
