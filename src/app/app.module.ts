import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
//import { HelloComponent } from './hello/hello.component';
//import { ProdListComponent } from './prod-list/prod-list.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
