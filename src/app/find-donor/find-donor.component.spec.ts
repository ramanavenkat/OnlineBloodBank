import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDonorComponent } from './find-donor.component';

describe('FindDonorComponent', () => {
  let component: FindDonorComponent;
  let fixture: ComponentFixture<FindDonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
