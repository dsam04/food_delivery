import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsAuthComponent } from './restaurants-auth.component';

describe('RestaurantsAuthComponent', () => {
  let component: RestaurantsAuthComponent;
  let fixture: ComponentFixture<RestaurantsAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantsAuthComponent]
    });
    fixture = TestBed.createComponent(RestaurantsAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
