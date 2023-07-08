import mongoose, { Document } from "mongoose";
export interface IProduct extends Document {
    duan: string,
    name: string;
    linkgit: string;
    linkprv: string;
    description?: string;
    categoryId: mongoose.Types.ObjectId;
}
export interface IProductResponse {
    data: IProduct[];
    pagination: {
        currentPage: number;
        totalPages: number;
        totalItems: number;
    };
}