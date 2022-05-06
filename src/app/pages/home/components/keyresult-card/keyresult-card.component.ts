import { Component, Input, OnInit } from '@angular/core';
import { KeyResult } from 'src/app/models/key-results.model';

@Component({
  selector: 'app-keyresult-card',
  templateUrl: './keyresult-card.component.html',
  styleUrls: ['./keyresult-card.component.scss']
})
export class KeyresultCardComponent implements OnInit {

  @Input() keyResult: KeyResult = {
    description: '',
    progress: 0
  };

  constructor() { }

  ngOnInit(): void { }

}
