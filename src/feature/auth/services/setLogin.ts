import { Request, Response } from "express";

export const setLogin = (req: Request, res: Response) => {
  const user = process.env.APP_USERNAME || "admin"
  const pass = process.env.APP_PASSWORD || "admin"
  const { username, password } = req.body
  console.log(user == username && pass == password, username, password, user, pass)
  res.sendStatus(user == username && pass == password ? 200 : 401)
}