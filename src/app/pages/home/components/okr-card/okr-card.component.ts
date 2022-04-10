import { Component, Input, OnInit } from '@angular/core';
import { Okr } from 'src/app/models';

@Component({
  selector: 'app-okr-card',
  templateUrl: './okr-card.component.html',
  styleUrls: ['./okr-card.component.scss']
})
export class OkrCardComponent implements OnInit {

  @Input() okr: Okr = {
    objective: '',
    progress: 0,
    keyResults: [],
    completed: false
  };

  public showKeyResults = false;

  constructor() { }

  ngOnInit(): void {
  }

  public handlerClick() {
    this.showKeyResults = !this.showKeyResults;
  }

}
