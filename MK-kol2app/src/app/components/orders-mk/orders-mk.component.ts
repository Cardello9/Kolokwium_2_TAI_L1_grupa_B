import { Component, OnInit } from '@angular/core';
import {MK24052019Service} from '../../services/mk-24052019.service';

@Component({
  selector: 'app-orders-mk',
  templateUrl: './orders-mk.component.html',
  styleUrls: ['./orders-mk.component.css']
})
export class OrdersMKComponent implements OnInit {

  public items$: any;

  constructor(private serv: MK24052019Service) { }

  ngOnInit() {
    this.serv.getAll().subscribe(res => {
      console.log(res);
      this.items$ = res;
    });
  }

}
