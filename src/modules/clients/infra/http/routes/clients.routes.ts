import { Router } from "express";
import ClientsController from "../controllers/ClientsController";

const routes = Router();

routes.post("/create", ClientsController.create);

routes.get("/list", ClientsController.list);

routes.get("/:id", ClientsController.findById);

routes.put("/:id", ClientsController.edit);

routes.delete("/:id", ClientsController.delete);

export default routes;