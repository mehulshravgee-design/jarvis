import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_BANNER_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent, IgxSnackbarComponent, IgxSwitchComponent } from 'igniteui-angular';

@Component({
  selector: 'app-system-settings',
  imports: [IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_BANNER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent, IgxSwitchComponent, IgxSnackbarComponent, FormsModule],
  templateUrl: './system-settings.component.html',
  styleUrls: ['./system-settings.component.scss']
})
export class SystemSettingsComponent {
  public protocolOverrideGateActive = false;
  public synthesizerVoiceProfile = 'JARVIS British AI Classic';
  public autonomousNeuralExecutionActive = false;
  public voiceSynthesisSpeechRate = 1;
  public value = '1';
  public checked = true;
  public checked1 = true;
  public checked2 = true;
  public value1 = '3';
  public value2 = '2';
  public checked3 = true;
  public checked4 = true;
  public checked5 = true;
  public value3 = 50;


  public clickStateActionSystemSettingsVocalSynthesizerCalibrationDefaultVoiceCalibration(): void {
    this.voiceSynthesisSpeechRate = parseFloat('50');
    this.synthesizerVoiceProfile = 'JARVIS British AI Classic';
  }

  public clickStateActionSystemSettingsPersonaProtocolsSecurityGatesLockSecurityProtocols(): void {
    this.protocolOverrideGateActive = false;
    this.autonomousNeuralExecutionActive = false;
  }
}
