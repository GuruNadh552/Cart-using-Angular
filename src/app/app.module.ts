import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { OrderDetail } from './orderDetails.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    OrderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [OrderDetail],
  bootstrap: [AppComponent]
})
export class AppModule { }
