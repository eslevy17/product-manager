import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    thisProduct: any;
    errors: any = []
    errorCheck: boolean = true;
    id: any;
  constructor(
      private _httpService: HttpService,
      private _activatedRoute: ActivatedRoute,
      private _router: Router,
  ) { }

  ngOnInit() {
      this.thisProduct = {
          name: "",
          price: 0,
          url: ""
      }
      this.findOne()
  }

  findOne() {
      this._activatedRoute.params.subscribe((params: Params) => this.id = params['id']);
      let obs = this._httpService.findOne(this.id)
      obs.subscribe(data => {
          this.thisProduct = data;
      })
  }

  updateProduct() {
      this.errors = [];
      let obs = this._httpService.updateProduct(this.id, this.thisProduct)
      obs.subscribe(data => {
          if ('errors' in data) {
              for (var errorkey in data.errors) {
                  this.errors.push(data.errors[errorkey].message)
              }
              this.errorCheck = true;
          }
          else {
              this._router.navigate(['/view']);
          }
      })
  }

}
