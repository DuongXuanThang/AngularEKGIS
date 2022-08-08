import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSumComponent } from './product-sum.component';

describe('ProductSumComponent', () => {
  let component: ProductSumComponent;
  let fixture: ComponentFixture<ProductSumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
