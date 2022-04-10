import { Component, OnInit } from '@angular/core';
import { Okrs } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public okrs: Okrs = [{
    objective: 'Desarrollar una App Web de OKRs Completa',
    progress: 0,
    completed: false,
    keyResults: [
      {
        description: 'Crear la APP en Angular',
        progress: 1
      },
      {
        description: 'Crear el Backend en NodeJS',
        progress: 0.3
      },
      {
        description: 'Guarda la data en Mongo',
        progress: 0
      }
    ]
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
