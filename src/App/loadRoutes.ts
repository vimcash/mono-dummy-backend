import { Express, Router } from "express"
import { auth } from "../feature/auth"

const loadRoutes = (App:Express) => {
  const router = Router()
  auth(router)
  App.use(router)
}
export default loadRoutes