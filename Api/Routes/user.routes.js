import express from "express";
import { test } from "../Controller/user.controller.js";

const UserRouter = express.Router();

UserRouter.get('/test',test)

export default UserRouter;