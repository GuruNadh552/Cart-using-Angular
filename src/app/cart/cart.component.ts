import { Component, OnInit } from '@angular/core';
import { OrderDetail } from '../orderDetails.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  tp = 0;

  data:any = [];

  displayData = true;

  cartItems : any =[]
  cartData: any;
  constructor(private _orderService: OrderDetail) { 
    this.data = this._orderService.getOrderDetails();
    this.cartData = this.data.filter((item: { cStatus: boolean; })=> {return item.cStatus==true;});
  }

  ngOnInit(): void {
    this.getData();
    if(this.cartData.length == 0){
      this.displayData = false;
    }
  }
  increaseQuantity(i:any){
    this.cartItems[i].pQuantity = this.cartItems[i].pQuantity + 1;
    this.cartItems[i].pTotal = Math.round(this.cartItems[i].pQuantity * this.cartItems[i].pPrice);
    this.tp += parseInt(this.cartItems[i].pPrice);
  }
  decreaseQuantity(i:any){
    this.tp = this.cartItems[i].pQuantity <= 1 ? this.tp : this.tp -= parseInt(this.cartItems[i].pPrice);
    this.cartItems[i].pQuantity =  this.cartItems[i].pQuantity <= 1 ? 1 : this.cartItems[i].pQuantity - 1;
    this.cartItems[i].pTotal = Math.round(this.cartItems[i].pQuantity * this.cartItems[i].pPrice);
  }

  getData(){
    for (let i=0;i<this.cartData.length;i++){
      this.cartItems.push({
        "pName":this.cartData[i].pName,
        "pImage":this.cartData[i].pImage,
        "pPrice":this.cartData[i].pPrice,
        "pQuantity":1,
        "pTotal":this.cartData[i].pPrice,
      })

      this.tp += parseInt(this.cartData[i].pPrice); 
    }
  }
}
