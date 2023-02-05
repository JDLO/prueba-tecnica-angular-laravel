import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataBase } from '../model/database';
import { Product } from '../model/product';



@Injectable({
  providedIn: 'root'
})

export class ProductService {
  public url: string = '../../assets/jsDataProdicts.json';
  public data!: DataBase;

  public modelConstructor(data: any){
    return new DataBase(data);
  }

  public getData(): Promise<DataBase>{
    return this.httpClient.get<DataBase>(this.url)
    .toPromise()
    .then(response => this.modelConstructor(response));
  }

  public async getAllProducts(): Promise<Product[]>{
    this.data = await this.getData();
    return this.data.products;
  }

  constructor(
    protected httpClient: HttpClient
  ) {}
}
