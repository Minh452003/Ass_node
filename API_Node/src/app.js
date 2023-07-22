import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/products.js";
import routerUser from "./routes/users.js";
import routerCategory from "./routes/categories.js";
import routerBlog from "./routes/blogs.js";
import routerResume from "./routes/resumes.js";
import routerService from "./routes/services.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use("/api", routerUser);
app.use("/api", routerCategory);
app.use("/api", routerBlog);
app.use("/api", routerResume);
app.use("/api", routerService);


app.listen(8080, async () => {
    await mongoose.connect(process.env.URL_MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Server is running 8080");
});