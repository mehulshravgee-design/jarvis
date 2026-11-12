import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CHIPS_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxSnackbarComponent, IgxSwitchComponent } from 'igniteui-angular';

@Component({
  selector: 'app-ai-assistant',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxBadgeComponent, IgxSwitchComponent, IgxButtonDirective, IgxIconComponent, IgxAvatarComponent, IgxSnackbarComponent, FormsModule],
  templateUrl: './ai-assistant.component.html',
  styleUrls: ['./ai-assistant.component.scss']
})
export class AIAssistantComponent {
  public neuralReasoningDepth = 'Comprehensive';
  public voiceAudioSynthesizerActive = true;
  public conversationThreadsListSelectedItem?: string;
  public chronologicalChatMessagesStreamSelectedItem?: string;
  public value?: string;
  public value1 = 'Encrypted PDF Dossier';
  public checked = true;
  public checked1 = true;


  public clickDefaultAudioSettings(): void {
    this.voiceAudioSynthesizerActive = true;
    this.neuralReasoningDepth = 'Comprehensive';
  }
}
