import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviesSignalenDetailsComponent } from './advies-signalen-details.component';

describe('AdviesSignalenDetailsComponent', () => {
  let component: AdviesSignalenDetailsComponent;
  let fixture: ComponentFixture<AdviesSignalenDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdviesSignalenDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviesSignalenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
