import express from "express";
import { getAll, get, create, remove, update } from "../controller/service";
import { checkPermission } from "../middlewares/checkPermission";

const routerService = express.Router();

routerService.get("/services", getAll);
routerService.get("/services/:id", get);
routerService.post("/services", checkPermission, create);
routerService.delete("/services/:id", checkPermission, remove);
routerService.patch("/services/:id", checkPermission, update);

export default routerService;