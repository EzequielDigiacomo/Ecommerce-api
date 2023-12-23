import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  baseUrl = 'https://api.escuelajs.co/api/v1/'

  constructor(private httpClient: HttpClient) { }
  
  getAllProduct(){
    const response = this.httpClient.get<Product[]>(`${this.baseUrl}products`)
    return response
  }
  
  // lo mismo de arriba pero con una promesa
  // getPromise(): Promise<any[]>{
  //   return lastValueFrom(this.httpClient.get<any[]>(`${this.baseUrl}products`))
  // }
}
