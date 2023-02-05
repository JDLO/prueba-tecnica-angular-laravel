import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalPageProductsRoutingModule } from './principal-page-products-routing.module';
import { PrincipalPageProductsComponent } from './principal-page-products.component';
import { ListCardProductsComponent } from '../../components/list-card-products/list-card-products.component';
import { CardProductsComponent } from '../../components/card-products/card-products.component';
import { HeaderPrincipalComponent } from '../../components/header-principal/header-principal.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    PrincipalPageProductsComponent,
    ListCardProductsComponent,
    CardProductsComponent,
    HeaderPrincipalComponent,
  ],
  imports: [
    CommonModule,
    PrincipalPageProductsRoutingModule,
    ToastrModule.forRoot(),
  ]
})
export class PrincipalPageProductsModule { }
