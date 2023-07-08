import express from "express";
import { getAll, get, create, remove, update } from "../controller/blog";
import { checkPermission } from "../middlewares/checkPermission";

const routerBlog = express.Router();

routerBlog.get("/blogs", getAll);
routerBlog.get("/blogs/:id", get);
routerBlog.post("/blogs", checkPermission, create);
routerBlog.delete("/blogs/:id", checkPermission, remove);
routerBlog.patch("/blogs/:id", checkPermission, update);

export default routerBlog;