import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  viewCart : boolean = false;
  
  constructor(){}

  ngOnInit(): void {
  }
  onToggleCart(){
    this.viewCart =!this.viewCart;
    console.log(this.viewCart)

  }
}
