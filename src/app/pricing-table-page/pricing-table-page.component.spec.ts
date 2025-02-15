import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTablePageComponent } from './pricing-table-page.component';

describe('PricingTablePageComponent', () => {
  let component: PricingTablePageComponent;
  let fixture: ComponentFixture<PricingTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricingTablePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
