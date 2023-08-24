import { NextFunction, Request, Response } from "express";
import createLinkService from "../../services/links/createLink.service";

const createLink = async (req: Request, res: Response, next: NextFunction) => {
	const originalURL: string = req.body.original_url;
	const baseURL: string =
		process.env.NODE_ENV === "production"
			? "https://little.link/"
			: "http://127.0.0.1/3002";
	try {
		new URL(originalURL);
	} catch (err) {
		const error = new Error("Invalid Original URL");
		next(error);
	}
};
