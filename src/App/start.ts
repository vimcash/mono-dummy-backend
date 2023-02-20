import express from "express";
import loadMiddlewares from "./loadMiddlewares";
import loadRoutes from "./loadRoutes";

const start = () => {
  const port = process.env.PORT || 8080
  const App = express()
  loadMiddlewares(App)
  loadRoutes(App)
  App.listen(port,() => console.log(`APP PORT: ${port}`))
}

export default start