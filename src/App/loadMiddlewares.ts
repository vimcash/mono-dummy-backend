import { Express, json } from "express";

const loadMiddlewares = (App:Express) => {
  App.use(json())
  App.set("trust proxy", true)
}

export default loadMiddlewares