import { Injectable } from "@angular/core";
@Injectable()

export class OrderDetail {

    constructor(){

    }

    data = [{
      pName : "Laptop Bag 1",
      pId : "1",
      pImage:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      pDesc : "bag for Carrying laptop",
      pPrice : "209.10",
      cStatus : false,
    },
    {
      pName : "T-Shirt XXL",
      pId : "2",
      pImage:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      pDesc : "best TShirt for MEn",
      pPrice : "309.10",
      cStatus : false,
    },
    {
      pName : "Shirt L",
      pId : "3",
      pImage:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      pDesc : "Best Shirt FOr Men",
      pPrice : "109.10",
      cStatus : false,
    },
    {
      pName : "T-Shirt XL",
      pId : "4",
      pImage:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      pDesc : "Best Round T-shirt for men",
      pPrice : "409.10",
      cStatus : false,
    },
    {
      pName : " SanDisk SSD",
      pId : "5",
      pImage:"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      pDesc : "Best SSD For Laptop",
      pPrice : "509.10",
      cStatus : false,
    },
    {
      pName : "LG TV",
      pId : "6",
      pImage:"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      pDesc : "Best TV For home",
      pPrice : "609.10",
      cStatus : false,
    },]

    getOrderDetails(){
        return this.data;
    }

    updateOrder(dat:any){
      this.data = dat;
    }
}