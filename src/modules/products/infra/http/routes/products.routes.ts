import { Router } from "express";
import ProductsController from "../controllers/ProductController";

const routes = Router();

routes.post("/create", ProductsController.create);

routes.get("/list", ProductsController.list);

routes.get("/:id", ProductsController.findById);

routes.put("/:id", ProductsController.update);

routes.delete("/:id", ProductsController.delete);

export default routes;