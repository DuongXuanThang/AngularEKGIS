import { Component, OnInit, Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
@Input() products:any;
@Output() onRemoveProduct = new EventEmitter();
@Output() onUpdateQuantity = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  removeProduct(param:String): void{
    this.onRemoveProduct.emit(param);

 }


 inputQuantity(id: String, inputElement: HTMLInputElement) :void{

  const value = inputElement.value;
  const intValue = parseInt(value);

  if (intValue < 1) {
    inputElement.value = -intValue + ''; // khong co so am
  } else if (value.length > 2) {
    inputElement.value = value.slice(0, 2); // chi tu 1 ->99 so luong
  }
console.log(id);
  this.onUpdateQuantity.emit({ id, quantity: parseInt(inputElement.value) || '' });
}

// onChangeQuantity(elememt :any){
// console.log(elememt.value);
// }
}
