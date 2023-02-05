import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-principal-page-products',
  templateUrl: './principal-page-products.component.html',
  styleUrls: ['./principal-page-products.component.scss']
})
export class PrincipalPageProductsComponent implements OnInit {
  public products!: Product[];
  public productToCart: Product[] = [];

  constructor(
    protected productService: ProductService,
    /*protected toastController: ToastrService*/
    ){}

  ngOnInit(){
    this.LoadAllProducts();
  }

  public async LoadAllProducts(){
    this.products = await this.productService.getAllProducts();
  }

  public onAddDish(product: Product){
    this.productToCart.push(product);
    console.log(this.productToCart)
  }

  /*public async toastSuccesfull(){
    this.toastController.success("Se agrego al carrito correctamente");
  }*/

}
