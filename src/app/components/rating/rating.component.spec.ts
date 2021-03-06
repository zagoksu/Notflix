import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdRatingConfig } from './rating.component';

describe('RatingComponent', () => {
  let component: NgbdRatingConfig;
  let fixture: ComponentFixture<NgbdRatingConfig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbdRatingConfig ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdRatingConfig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
