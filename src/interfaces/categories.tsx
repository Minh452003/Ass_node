import { IProduct } from "./products";

export interface ICategory {
    _id?: number | string,
    name: string,
    description: string
}
export interface IPropsCate {
    products: IProduct;
    onAdd: (product: ICategory) => void
}
export interface IUpdate {
    categories: ICategory[];
    onUpdate: (category: ICategory) => void
}