export class Product {
    public readonly id: number;
    public name: string;
    public currency: string;
    public discount: number;
    public price: number;
    public img: string;

    public constructor(entity: any){
        this.id = entity.id;
        this.name = entity.name;
        this.price = entity.price;
        this.discount = entity.discount;
        this.currency = entity.currency
        this.img = entity.img;
    }
}