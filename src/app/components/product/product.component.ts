import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[] = [];

  constructor(private storeServices: StoreService){ }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.storeServices.getAllProduct().subscribe((data)=>{
      return this.products = data;
    })
  }
  //aca conecto el componente product con el servicio store
  addToCart(product: Product){
    return this.storeServices.addProduct(product);
  }
}
