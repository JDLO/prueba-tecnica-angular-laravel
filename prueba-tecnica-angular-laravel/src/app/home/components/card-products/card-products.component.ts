import { Component, Input } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.scss']
})
export class CardProductsComponent {
  @Input()
  public product!: Product;

  protected valueOfDiscont(){
    let discount = this.product.discount
    let porcent = discount > 0? (discount/100): 1;

    return (this.product.price * porcent).toFixed(2);
  }
}
