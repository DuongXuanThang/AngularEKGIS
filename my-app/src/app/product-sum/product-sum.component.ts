import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-product-sum',
  templateUrl: './product-sum.component.html',
  styleUrls: ['./product-sum.component.css']
})
export class ProductSumComponent implements OnInit {
@Input() subTotal: any;
@Input() tax: any;
@Input() discount: any;
  constructor() { }

  ngOnInit(): void {
  }

}
