import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
@Input() products:any;


  constructor() { }

  ngOnInit(): void {
  }
 removeProduct(param:String): void{

const index = this.products.findIndex((pro : any) => pro.id === param); // tim vi tri cua id trong mang
if(index !== -1){ // neu tim thay
this.products.splice(index, 1);
}
 }
onChangeQuantity(elememt :any){
console.log(elememt.value);
}
}
