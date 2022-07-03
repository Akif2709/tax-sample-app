import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesKlantenComponent } from './features-klanten.component';

describe('FeaturesKlantenComponent', () => {
  let component: FeaturesKlantenComponent;
  let fixture: ComponentFixture<FeaturesKlantenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturesKlantenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesKlantenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
