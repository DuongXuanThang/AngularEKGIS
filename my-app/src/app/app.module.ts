import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductSumComponent } from './product-sum/product-sum.component';
import { PromoCodeComponent } from './promo-code/promo-code.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    ProductListComponent,
    ProductSumComponent,
    PromoCodeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
