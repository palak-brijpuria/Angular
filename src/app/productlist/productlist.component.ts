import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products = []
  constructor(public service : ProductService) { }

  ngOnInit() {
    this.service
            .getProduct()
              .subscribe(response=>{
                  this.products = response as any[]
              })
  }

}
