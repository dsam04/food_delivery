import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsAddProductComponent } from './restaurants-add-product.component';

describe('RestaurantsAddProductComponent', () => {
  let component: RestaurantsAddProductComponent;
  let fixture: ComponentFixture<RestaurantsAddProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantsAddProductComponent]
    });
    fixture = TestBed.createComponent(RestaurantsAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
