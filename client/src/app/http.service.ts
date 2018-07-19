import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
      private _http: HttpClient,
  ) { }

  viewAll() {
      return this._http.get('/api/products');
  }

  findOne(id) {
      return this._http.get('/api/products/' + id);
  }

  updateProduct(id, thisProduct) {
      return this._http.patch('/api/products/' + id, thisProduct);
  }

  addNew(newProduct) {
      return this._http.post('/api/products', newProduct)
  }

  deleteProduct(id) {
      return this._http.delete('/api/products/' + id)
  }







}
