import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageProductsComponent } from './principal-page-products.component';

const routes: Routes = [{
  path: '',
  component: PrincipalPageProductsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalPageProductsRoutingModule { }
