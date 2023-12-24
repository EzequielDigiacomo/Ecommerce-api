import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  baseUrl = 'https://api.escuelajs.co/api/v1/'

  //Lista carrito
  private myList: Product[] = [];

  //carrito observable
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable()

  constructor(private httpClient: HttpClient) { }
  
  getAllProduct(){
    const response = this.httpClient.get<Product[]>(`${this.baseUrl}products`)
    return response
  }
  
  // lo mismo de arriba pero con una promesa
  // getPromise(): Promise<any[]>{
  //   return lastValueFrom(this.httpClient.get<any[]>(`${this.baseUrl}products`))
  // }

  //creo la funcion que conectara el componente product con el addtocart
  addProduct(product : Product){

    if (this.myList.length === 0) {
      product.cantidad = 1
      this.myList.push(product);
      this.myCart.next(this.myList)   
    } else {
      const productMod = this.myList.find((element)=>{
        return element.id === product.id
      })
      if(productMod){
        productMod.cantidad = productMod.cantidad + 1;
        this.myCart.next(this.myList)
      } else {
        product.cantidad = 1;
        this.myList.push(product)
        this.myCart.next(this.myList)
      }
    }
  }

  deleteProduct(id : string){
    this.myList =this.myList.filter((product)=>{
      return product.id != id;
    })
    this.myCart.next(this.myList)
  }

 findProductById(id:string){
   return this.myList.find((element)=>{
    return element.id === id;
   })
  }

  totalCart(){
    const total = this.myList.reduce(function(accumulador, product){return accumulador + (product.cantidad * product.price);}, 0)
    return total
  }
}
