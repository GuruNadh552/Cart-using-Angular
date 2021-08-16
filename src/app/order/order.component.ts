import { Component, OnInit } from '@angular/core';
import { OrderDetail } from '../orderDetails.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
  alert = false;
  msg="";

  data : any= [];

  constructor(private _orderService: OrderDetail) { }

  ngOnInit(): void {
    this.data = this._orderService.getOrderDetails();
  }

  addItem(ind: any){
    this.data[ind].cStatus=true;
    this.msg = "Item Added to Cart";
    this.alert=true;
    this._orderService.updateOrder(this.data);
  }
  removeItem(ind: any){
    this.data[ind].cStatus=false;
    this.msg = "Item Removed from Cart";
    this.alert=true;
    this._orderService.updateOrder(this.data);
  }
}
