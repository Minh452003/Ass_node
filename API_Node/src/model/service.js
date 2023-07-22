import mongoose from "mongoose";


const ServiceSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
    }
}, { timestamps: true, versionKey: false });

export default mongoose.model("Service", ServiceSchema);