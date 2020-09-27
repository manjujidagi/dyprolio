import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTopBannerComponent } from './product-top-banner.component';

describe('ProductTopBannerComponent', () => {
  let component: ProductTopBannerComponent;
  let fixture: ComponentFixture<ProductTopBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTopBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTopBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
