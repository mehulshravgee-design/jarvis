import { Routes } from '@angular/router';

import { NotFound } from './error-routing/not-found/not-found';
import { UncaughtError } from './error-routing/error/uncaught-error';
import { CommandCenterComponent } from './command-center/command-center.component';
import { AIAssistantComponent } from './ai-assistant/ai-assistant.component';
import { TasksAndScheduleComponent } from './tasks-and-schedule/tasks-and-schedule.component';
import { AdvancedToolsComponent } from './advanced-tools/advanced-tools.component';
import { SystemSettingsComponent } from './system-settings/system-settings.component';

export const routes: Routes = [
  { path: '', redirectTo: 'command-center', pathMatch: 'full' },
  { path: 'error', component: UncaughtError },
  { path: 'command-center', component: CommandCenterComponent, data: { text: 'Command-Center' } },
  { path: 'ai-assistant', component: AIAssistantComponent, data: { text: 'Aiassistant' } },
  { path: 'tasks-and-schedule', component: TasksAndScheduleComponent, data: { text: 'Tasks-And-Schedule' } },
  { path: 'advanced-tools', component: AdvancedToolsComponent, data: { text: 'Advanced-Tools' } },
  { path: 'system-settings', component: SystemSettingsComponent, data: { text: 'System-Settings' } },
  { path: '**', component: NotFound } // must always be last
];
