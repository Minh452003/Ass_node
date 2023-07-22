import express from "express";
import { getAll, get, create, remove, update } from "../controller/resume.js";
import { checkPermission } from "../middlewares/checkPermission.js";

const routerResume = express.Router();

routerResume.get("/resumes", getAll);
routerResume.get("/resumes/:id", get);
routerResume.post("/resumes", checkPermission, create);
routerResume.delete("/resumes/:id", checkPermission, remove);
routerResume.patch("/resumes/:id", checkPermission, update);

export default routerResume;