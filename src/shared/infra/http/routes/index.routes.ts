import { Router } from "express";
import clientsRoutes from "../../../../modules/clients/infra/http/routes/clients.routes";
import categoryRoutes from "../../../../modules/categories/infra/http/routes/categories.routes";
import productsRoutes from "../../../../modules/products/infra/http/routes/products.routes";
import ordersRoutes from "../../../../modules/orders/infra/http/routes/orders.routes";

const routes = Router();

routes.use("/clients", clientsRoutes);
routes.use("/categories", categoryRoutes);
routes.use("/products", productsRoutes);
routes.use("/orders", ordersRoutes);

export default routes;