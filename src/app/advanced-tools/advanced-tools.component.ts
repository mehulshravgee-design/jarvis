import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_BUTTON_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent, IgxSnackbarComponent, IgxSwitchComponent } from 'igniteui-angular';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexLegend, ApexMarkers, ApexTheme, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { Subject, takeUntil } from 'rxjs';
import { AnalysisSessionType } from '../models/analysis-session-datasource/analysis-session-type';
import { AnalysisSessionTypeAnalysisSession } from '../models/analysis-session/analysis-session-type-analysis-session';
import { CodeSnippetType } from '../models/code-snippet/code-snippet-type';
import { AnalysisSessionDatasourceService } from '../services/analysis-session-datasource.service';
import { AnalysisSessionService } from '../services/analysis-session.service';
import { CodeSnippetService } from '../services/code-snippet.service';

@Component({
  selector: 'app-advanced-tools',
  imports: [IGX_BUTTON_GROUP_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent, IgxAvatarComponent, IgxSnackbarComponent, IgxSwitchComponent, ChartComponent, FormsModule],
  templateUrl: './advanced-tools.component.html',
  styleUrls: ['./advanced-tools.component.scss']
})
export class AdvancedToolsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  private _analysisSession: AnalysisSessionTypeAnalysisSession[] = [];
  public get analysisSession(): AnalysisSessionTypeAnalysisSession[] {
    return this._analysisSession;
  }
  public set analysisSession(value: AnalysisSessionTypeAnalysisSession[]) {
    this._analysisSession = value;
    this.series = this.getSeries();
  }
  public value?: string;
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
      enabled: true
    },
    toolbar: {
      show: true
    },
    fontFamily: 'var(--ig-font-family)',
    height: '100%'
  };
  public title: ApexTitleSubtitle = {
    text: 'Confidence Score Distribution by Analytical Tool'
  };
  public xaxis: ApexXAxis = {
    title: {
      text: 'Tool Category'
    }
  };
  public yaxis: ApexYAxis = {
    title: {
      text: 'Confidence Rating (%)'
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
    enabled: false
  };
  public value1?: string;
  public value2?: string;
  public value3 = '1';
  public value4?: string;
  public value5?: string;
  public value6 = 95;
  public value7 = '1';
  public value8?: string;
  public checked = true;
  public analysisSessionDatasourceAnalysisSession: AnalysisSessionType[] = [];
  public codeSnippetCodeSnippet: CodeSnippetType[] = [];

  constructor(
    public analysisSessionService: AnalysisSessionService,
    public analysisSessionDatasourceService: AnalysisSessionDatasourceService,
    public codeSnippetService: CodeSnippetService,
  ) {}


  ngOnInit() {
    this.analysisSessionService.getAnalysisSession().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.analysisSession = data;
        this.changeDetectorRef.markForCheck();
      }
    );
    this.analysisSessionDatasourceService.getAnalysisSession().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.analysisSessionDatasourceAnalysisSession = data;
        this.changeDetectorRef.markForCheck();
      }
    );
    this.codeSnippetService.getCodeSnippet().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.codeSnippetCodeSnippet = data;
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
        name: 'confidenceScore',
        data: this.analysisSession,
        parsing: {
          x: 'toolType',
          y: [
            'confidenceScore'
          ]
        }
      }
    ];
  }
}
