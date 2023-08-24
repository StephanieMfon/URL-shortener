import { NextFunction, Request, Response } from "express";
import redirectLinkService from "../../services/links/redirectLink.service";

const redirectLink = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const id: string = req.params.id;
	if (!id) {
		const error = new Error("Missing Id");
		return next(error);
	}

	let link;
	try {
		link = await redirectLinkService(id);
	} catch (err) {
		res.status(404).send();
	}

	if (!link) {
		res.status(404).send("Error no link!");
	} else {
		res.status(301).redirect(link.original_link);
	}
};

export default redirectLink;
