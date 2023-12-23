import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  products : Product[] = [];

  constructor(private storeServices: StoreService){}

  ngOnInit(): void {
    this.storeServices.getAllProduct().subscribe((data) =>{
      this.products = data
      console.log(this.products)
    } )
  }

}
