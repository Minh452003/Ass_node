import mongoose, { UpdateQuery, model } from "mongoose";


interface ICategory {
    name: string;
    products: mongoose.Types.ObjectId[];
    deletedAt?: Date | null;
    deleted?: boolean;
}
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    products: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Product",
        },
    ],
});

export default mongoose.model("Category", categorySchema);