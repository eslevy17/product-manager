import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    newProduct: any;
    errors: any = []
    errorCheck: boolean = true;
  constructor(
      private _httpService: HttpService,
      private _router: Router,
  ) { }

  ngOnInit() {
      this.newProduct = {
          title: "",
          price: 0,
          url: ""
      }
  }

  addNew() {
      this.errors = [];
      let obs = this._httpService.addNew(this.newProduct);
      obs.subscribe(data => {
          if ('errors' in data) {
              for (var errorkey in data.errors) {
                  this.errors.push(data.errors[errorkey].message)
              }
              this.errorCheck = true;
          }
          else {
              // this.newProduct = data;
              this._router.navigate(['/view'])
            }
      })
  }

}
