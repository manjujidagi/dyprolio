import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagementAddProductComponent } from './data-management-add-product.component';

describe('DataManagementAddProductComponent', () => {
  let component: DataManagementAddProductComponent;
  let fixture: ComponentFixture<DataManagementAddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataManagementAddProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataManagementAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
