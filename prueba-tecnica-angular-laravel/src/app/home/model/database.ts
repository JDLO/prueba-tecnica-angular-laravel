import { Product } from "./product";

export class DataBase {
    public products: Product[];

    constructor(entity: any){
        this.products = entity.products;
    }
}