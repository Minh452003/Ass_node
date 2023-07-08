import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";


const productsSchema = new mongoose.Schema({
    duan: String,
    name: {
        type: String,
        require: true,
    },
    linkgit: String,
    linkprv: String,
    image: String,
    description: String,
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },

}, { timestamps: true, versionKey: false });

productsSchema.plugin(mongoosePaginate);
export default mongoose.model("Product", productsSchema);