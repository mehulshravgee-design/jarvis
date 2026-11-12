import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IsActiveMatchOptions, Router, RouterLink, RouterOutlet } from '@angular/router';
import { IGX_CARD_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IGX_NAVIGATION_DRAWER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxSnackbarComponent, IgxSwitchComponent, IgxToggleActionDirective } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { TaskDirectiveTypeTaskDirective } from './models/task-directive/task-directive-type-task-directive';
import { TaskDirectiveService } from './services/task-directive.service';

@Component({
  selector: 'app-root',
  imports: [IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_NAVIGATION_DRAWER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxToggleActionDirective, IgxIconComponent, IgxButtonDirective, IgxBadgeComponent, IgxSwitchComponent, IgxAvatarComponent, IgxSnackbarComponent, RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  public value = '2';
  public value1 = '1';
  public checked = true;
  public checked1 = true;
  public checked2 = true;
  public value2?: string;
  public value3 = '1';
  public value4 = '96.4%';
  public checked3 = true;
  public taskDirectiveTaskDirective: TaskDirectiveTypeTaskDirective[] = [];

  constructor(
    public taskDirectiveService: TaskDirectiveService,
    public router: Router,
  ) {}


  ngOnInit() {
    this.taskDirectiveService.getTaskDirective().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.taskDirectiveTaskDirective = data;
        this.changeDetectorRef.markForCheck();
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public isActive(path: string): boolean {
    const exactMatch: IsActiveMatchOptions = {
        paths: 'exact',
        matrixParams: 'ignored',
        queryParams: 'ignored',
        fragment: 'ignored'
    }
    return this.router.isActive(path, exactMatch);
  }
}
