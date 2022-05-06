import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { OkrCardComponent } from './components/okr-card/okr-card.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { KeyresultCardComponent } from './components/keyresult-card/keyresult-card.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HomeComponent,
    OkrCardComponent,
    ProgressBarComponent,
    KeyresultCardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
