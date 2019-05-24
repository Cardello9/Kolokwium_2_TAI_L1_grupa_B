import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsMKComponent } from './orders-details-mk.component';

describe('OrdersDetailsMKComponent', () => {
  let component: OrdersDetailsMKComponent;
  let fixture: ComponentFixture<OrdersDetailsMKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDetailsMKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsMKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
