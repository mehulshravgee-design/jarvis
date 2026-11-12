import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IGX_BANNER_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent, IgxSnackbarComponent, IgxSwitchComponent } from 'igniteui-angular';

@Component({
  selector: 'app-command-center',
  imports: [IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_BANNER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxAvatarComponent, IgxBadgeComponent, IgxSwitchComponent, IgxSnackbarComponent, RouterLink, FormsModule],
  templateUrl: './command-center.component.html',
  styleUrls: ['./command-center.component.scss']
})
export class CommandCenterComponent {
  public executiveCommandProtocol = 'Standard Dispatch';
  public ambientAcousticSensorActive = false;
  public listSelectedItem?: string;
  public value?: string;
}
