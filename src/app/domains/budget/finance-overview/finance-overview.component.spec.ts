import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceOverviewComponent } from './finance-overview.component';

describe('FinanceOverviewComponent', () => {
  let component: FinanceOverviewComponent;
  let fixture: ComponentFixture<FinanceOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FinanceOverviewComponent]
    });
    fixture = TestBed.createComponent(FinanceOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
