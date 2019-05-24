import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-mk',
  templateUrl: './orders-item-mk.component.html',
  styleUrls: ['./orders-item-mk.component.css']
})
export class OrdersItemMKComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() image: string;
  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}
