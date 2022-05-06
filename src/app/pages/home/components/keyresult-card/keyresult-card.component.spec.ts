import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyresultCardComponent } from './keyresult-card.component';

describe('KeyresultsCardComponent', () => {
  let component: KeyresultCardComponent;
  let fixture: ComponentFixture<KeyresultCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeyresultCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyresultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
