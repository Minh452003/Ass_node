
export interface IProduct {
    _id?: number | string,
    duan: string,
    name: string,
    linkgit: string,
    linkprv: string,
    image: string,
    description: string,
    categoryId: number | string,
    createdAt: string,
    updateAt: string
}
export interface IProps {
    products: any;
    onAdd: (product: IProduct) => void
}
export interface IUpdate {
    products: IProduct[];
    onUpdate: (product: IProduct) => void
}