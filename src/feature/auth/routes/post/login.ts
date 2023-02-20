import { body } from "express-validator";
import { setLogin } from "../../services/setLogin";

export const login = (router:any) => {
  router.post(
    "/login",
    [
      body('username')
        .trim()
        .toLowerCase(),
      body('password')
        .trim()
    ],
    setLogin
  )
}