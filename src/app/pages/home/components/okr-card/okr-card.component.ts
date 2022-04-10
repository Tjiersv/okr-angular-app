import { Component, Input, OnInit } from '@angular/core';
import { Okrs } from 'src/app/models';

@Component({
  selector: 'app-okr-card',
  templateUrl: './okr-card.component.html',
  styleUrls: ['./okr-card.component.scss']
})
export class OkrCardComponent implements OnInit {

  @Input() okrs: Okrs = [];

  constructor() { }

  ngOnInit(): void {
  }

}
