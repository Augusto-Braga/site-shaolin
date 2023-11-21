import { Router } from "express";
import MainController from "../controllers/MainController";

class MainRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  private config(): void {
    this.router.get("/", MainController.getHelloWorld);
  }
}

export default new MainRoutes().router;
