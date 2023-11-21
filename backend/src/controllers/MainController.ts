import { Request, Response } from "express";

class MainController {
  public getHelloWorld(req: Request, res: Response): void {
    res.json({ message: "Hello World" });
  }
}

export default new MainController();
