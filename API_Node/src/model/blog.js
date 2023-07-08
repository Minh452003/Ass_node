import mongoose from "mongoose";


const BlogsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    description: {
        type: String,
    }
}, { timestamps: true, versionKey: false });

export default mongoose.model("Blog", BlogsSchema);