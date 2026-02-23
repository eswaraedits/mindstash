import { Router } from "express"
import { deleteContent, getContent, postContent } from "../controllers/contentController.js"

export const contentRouter = Router()

contentRouter.route("/").get(getContent).post(postContent)
contentRouter.delete("/delete/:id",deleteContent)