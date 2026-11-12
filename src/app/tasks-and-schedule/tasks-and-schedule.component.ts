import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CARD_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent, IgxSnackbarComponent, IgxSwitchComponent } from 'igniteui-angular';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexLegend, ApexMarkers, ApexPlotOptions, ApexTheme, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { Subject, takeUntil } from 'rxjs';
import { TaskDirectiveType } from '../models/task-directive-2/task-directive-type';
import { TaskDirectiveTypeTaskDirective1 } from '../models/task-directive-1/task-directive-type-task-directive-1';
import { TaskDirective1Service } from '../services/task-directive-1.service';
import { TaskDirective2Service } from '../services/task-directive-2.service';

@Component({
  selector: 'app-tasks-and-schedule',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxAvatarComponent, IgxBadgeComponent, IgxSnackbarComponent, IgxSwitchComponent, ChartComponent, FormsModule],
  templateUrl: './tasks-and-schedule.component.html',
  styleUrls: ['./tasks-and-schedule.component.scss']
})
export class TasksAndScheduleComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  public morningNewsAlertEnabled = false;

  private _taskDirective: TaskDirectiveTypeTaskDirective1[] = [];
  public get taskDirective(): TaskDirectiveTypeTaskDirective1[] {
    return this._taskDirective;
  }
  public set taskDirective(value: TaskDirectiveTypeTaskDirective1[]) {
    this._taskDirective = value;
    this.series = this.getSeries();
  }
  public tacticalRemindersListSelectedItem?: string;
  public universalHeadlinesListSelectedItem?: string;
  public series: ApexAxisChartSeries = this.getSeries();
  public colors: string[] = [
    '#00E5FF',
    '#7CE4FE',
    '#38BDF8',
    '#4ADE80',
    '#FCD34D'
  ];
  public chart: ApexChart = {
    type: 'bar',
    background: 'var(--ig-surface-700)',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: true
    },
    fontFamily: 'var(--ig-font-family)',
    height: '100%'
  };
  public plotOptions: ApexPlotOptions = {
    bar: {
      horizontal: true
    }
  };
  public title: ApexTitleSubtitle = {
    text: 'Estimated Directive Execution Time (Minutes)'
  };
  public xaxis: ApexXAxis = {
    title: {
      text: 'Operational Directive'
    }
  };
  public yaxis: ApexYAxis = {
    title: {
      text: 'Estimated Execution Minutes'
    }
  };
  public theme: ApexTheme = {
    mode: 'dark'
  };
  public legend: ApexLegend = {
    show: false
  };
  public markers: ApexMarkers = {
    size: 6
  };
  public dataLabels: ApexDataLabels = {
    enabled: true
  };
  public value?: string;
  public value1 = 0;
  public value2?: string;
  public value3 = 0;
  public value4 = '2';
  public checked = true;
  public value5 = '1';
  public taskDirective2TaskDirective: TaskDirectiveType[] = [];

  constructor(
    public taskDirective1Service: TaskDirective1Service,
    public taskDirective2Service: TaskDirective2Service,
  ) {}


  ngOnInit() {
    this.taskDirective1Service.getTaskDirective().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.taskDirective = data;
        this.changeDetectorRef.markForCheck();
      }
    );
    this.taskDirective2Service.getTaskDirective().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.taskDirective2TaskDirective = data;
        this.changeDetectorRef.markForCheck();
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getSeries(): ApexAxisChartSeries {
    return [
      {
        name: 'estimatedMinutes',
        data: this.taskDirective,
        parsing: {
          x: 'title',
          y: [
            'estimatedMinutes'
          ]
        }
      }
    ];
  }

  public stringToNumber(value: string): number {
    return parseFloat(value);
  }
}
