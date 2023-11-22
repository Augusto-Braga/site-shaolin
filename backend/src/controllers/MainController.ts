import { Request, Response } from "express";

class MainController {
  public getHelloWorld(req: Request, res: Response): void {
    try {
      res.json({ message: "Hello World" });
    } catch (err) {
      console.error(err);
    }
  }
}

export default new MainController();
