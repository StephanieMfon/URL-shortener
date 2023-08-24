import { Router } from "express";
import createLink from "../controllers/links/createLink.controller";
import redirectLinkService from "../controllers/links/redirectLink.controller";
import redirectLink from "../controllers/links/redirectLink.controller";

const linkRoutes = Router();

linkRoutes.get("/:id", redirectLink);
linkRoutes.post("/", createLink);

export default linkRoutes;
