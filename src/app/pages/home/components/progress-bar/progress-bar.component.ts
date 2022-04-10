import { Component, Input, OnInit } from '@angular/core';
import { progress } from 'src/app/models';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() progress: progress = 0;

  public progressBarClass: string = 'progress-bar__line';

  constructor() { }

  ngOnInit(): void {
    const progressClass = this.getProgressBarClass();
    this.progressBarClass = `${this.progressBarClass} ${progressClass}`;
  }

  private getProgressBarClass(): string {
    const barProgressClass = {
      1: 'completed',
      0.9: 'ninety',
      0.8: 'eighty',
      0.7: 'seventy',
      0.6: 'sixty',
      0.5: 'fifty',
      0.4: 'forty',
      0.3: 'thirty',
      0.2: 'twenty',
      0.1: 'ten',
      0: 'init',
    }
    return barProgressClass[this.progress];
  }

}
