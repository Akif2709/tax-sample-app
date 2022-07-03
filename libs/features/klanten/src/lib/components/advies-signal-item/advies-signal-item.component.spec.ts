import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviesSignalItemComponent } from './advies-signal-item.component';

describe('AdviesSignalItemComponent', () => {
  let component: AdviesSignalItemComponent;
  let fixture: ComponentFixture<AdviesSignalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdviesSignalItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviesSignalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
