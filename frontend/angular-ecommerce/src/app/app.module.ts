import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [AppComponent, ProductsListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductService, provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
