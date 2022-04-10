import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkrCardComponent } from './okr-card.component';

describe('OkrCardComponent', () => {
  let component: OkrCardComponent;
  let fixture: ComponentFixture<OkrCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkrCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OkrCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
