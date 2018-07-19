import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
    allProducts: any;
  constructor(
      private _httpService: HttpService,
  ) { }

  ngOnInit() {
      this.viewAll();
  }

  viewAll() {
      let obs = this._httpService.viewAll();
      obs.subscribe(data => {
          this.allProducts = data
      })
  }

  deleteProduct(id) {
      let obs = this._httpService.deleteProduct(id);
      obs.subscribe(data => {
          this.viewAll();
      })
  }



}
