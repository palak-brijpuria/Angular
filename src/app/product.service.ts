import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public helper : HttpClient)
   { }

   //url = "http://172.18.5.31:9898/product"
	url = "http://192.168.2.15:9898/product"

   getProduct()
   {
     return this.helper.get(this.url);
   }
}
