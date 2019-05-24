import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemMKComponent } from './orders-item-mk.component';

describe('OrdersItemMKComponent', () => {
  let component: OrdersItemMKComponent;
  let fixture: ComponentFixture<OrdersItemMKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersItemMKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemMKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
