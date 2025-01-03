import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("this is the route");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
