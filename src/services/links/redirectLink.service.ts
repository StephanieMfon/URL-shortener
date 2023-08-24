import linksModel from "../../models/links/links.model";

type Link = {
	link_key: string;
	original_link: string;
};

const redirectLinkService = async (id: string): Promise<Link> => {
	try {
		const link = await linksModel.get({ link_key: id });
		return link.toJSON() as Link;
	} catch (error) {
		throw error;
	}
};

export default redirectLinkService;
export { Link };
