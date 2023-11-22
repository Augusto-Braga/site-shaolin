import express, { Application } from "express";
import cors from "cors";
import MainRoutes from "./routes/MainRoutes";

class App {
  public app: Application;
  public port: number;

  constructor() {
    this.app = express();
    this.port = 8080;
    this.config();
    this.routes();
    this.listen();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
  }

  private routes(): void {
    this.app.use("/", MainRoutes);
  }

  private listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default new App().app;
