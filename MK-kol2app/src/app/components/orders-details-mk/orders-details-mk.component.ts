import { Component, OnInit } from '@angular/core';
import {MK24052019Service} from '../../services/mk-24052019.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-orders-details-mk',
  templateUrl: './orders-details-mk.component.html',
  styleUrls: ['./orders-details-mk.component.css']
})
export class OrdersDetailsMKComponent implements OnInit {

  public items$: any;
  id: any;

  constructor(private serv: MK24052019Service, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.id = param;
    });
    this.serv.getById(this.id).subscribe(res => {
      this.items$ = res;
    });
  }

}
