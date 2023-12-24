import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  //se creo en el servicio store
  myCart$ = this.storeServices.myCart$



  constructor(private storeServices:StoreService){}  
  
  
  ngOnInit(): void {
  
  }

  totalProduct(price : number, units : number){
    return price * units
  }

  deleteProduct(id: string){
    this.storeServices.deleteProduct(id);
  }

  updateUnits(opetarions: string, id:string){
   const product = this.storeServices.findProductById(id)
   
   if(product){
    if(opetarions === 'minus' && product.cantidad > 0){
      product.cantidad = product.cantidad -1;
    }
    if(opetarions === 'add'){
      product.cantidad = product.cantidad +1;
    }
    if(product.cantidad === 0){
      this.deleteProduct(id);
    }
   }
  }

  totalCart(){
    const result = this.storeServices.totalCart()
    return  result
  }
}
