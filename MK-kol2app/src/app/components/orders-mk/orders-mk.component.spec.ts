import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersMKComponent } from './orders-mk.component';

describe('OrdersMKComponent', () => {
  let component: OrdersMKComponent;
  let fixture: ComponentFixture<OrdersMKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersMKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersMKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
