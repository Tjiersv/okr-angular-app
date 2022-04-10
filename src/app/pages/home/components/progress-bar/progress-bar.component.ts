import { Component, Input, OnInit } from '@angular/core';

enum BarStateEnum {
  INITIAL = 0,
  COMPLETED = 1
}

type BarState = 'init' | 'half' | 'completed';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() progress: number = 0;

  public barState: string = 'progress-bar__line';

  constructor() { }

  ngOnInit(): void {
    const barProgress = this.calculateBarProgress(this.progress);
    this.barState = `${this.barState} ${barProgress}`;
  }

  private calculateBarProgress(progress: number): BarState {
    if (progress === BarStateEnum.INITIAL) return 'init';
    if (progress > BarStateEnum.INITIAL && progress < BarStateEnum.COMPLETED) return 'half';
    return 'completed';
  }

}
