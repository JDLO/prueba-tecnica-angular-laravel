import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-list-card-products',
  templateUrl: './list-card-products.component.html',
  styleUrls: ['./list-card-products.component.scss']
})
export class ListCardProductsComponent {
  @Input()
  public products!: Product[];
  @Output()
  public addToCartShop: EventEmitter<Product> = new EventEmitter();

  public add(product: Product){
    this.addToCartShop.emit(product)
  }
}
