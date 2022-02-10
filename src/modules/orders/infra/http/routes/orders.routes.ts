import { Router } from "express";
import OrdersController from "../controllers/OrderController";

const routes = Router();

routes.post("/create", OrdersController.create);

routes.get("/list", OrdersController.list);

routes.get("/:id", OrdersController.findById);

routes.get("/client/:id", OrdersController.findByClientId);

routes.put("/:id", OrdersController.update);

export default routes;