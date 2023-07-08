import mongoose from "mongoose";


const ResumesSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    timeline: {
        type: String,
        require: true
    },
    description: {
        type: String,
    }
}, { timestamps: true, versionKey: false });

export default mongoose.model("Resume", ResumesSchema);