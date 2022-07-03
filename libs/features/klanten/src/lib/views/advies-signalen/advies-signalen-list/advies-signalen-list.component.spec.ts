import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviesSignalenListComponent } from './advies-signalen-list.component';

describe('AdviesSignalenListComponent', () => {
  let component: AdviesSignalenListComponent;
  let fixture: ComponentFixture<AdviesSignalenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdviesSignalenListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviesSignalenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
