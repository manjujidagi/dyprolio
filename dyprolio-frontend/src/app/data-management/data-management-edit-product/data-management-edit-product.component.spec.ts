import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagementEditProductComponent } from './data-management-edit-product.component';

describe('DataManagementEditProductComponent', () => {
  let component: DataManagementEditProductComponent;
  let fixture: ComponentFixture<DataManagementEditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataManagementEditProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataManagementEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
