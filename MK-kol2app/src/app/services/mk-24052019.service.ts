import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MK24052019Service {

  // private url = "https://kol2tai.herokuapp.com";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get("https://kol2tai.herokuapp.com/api/order/items");
  }

  getById(id: number) {
    return this.http.get("https://kol2tai.herokuapp.com/api/order/items/" + id);
  }
}
