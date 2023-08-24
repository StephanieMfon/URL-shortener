import {nanoid} from "nanoid";
import linksModel from "../../models/links/links.model"
import {Document} from "dynamoose/dist/Document"

const createLinkService = async(originalURL: string) Promise<Document>=>{
    const keyLength:number = 8;
    let keepCheckingForDuplicateKeys: Boolean = true;
    let newKey:string= nanoid(keyLength);
// Takes in  the original URL
// Generates special 8 digit token for that URL
    while (keepCheckingForDuplicateKeys){
        let linkFoundWithKey;
        try{
            linkFoundWithKey = await linksModel.get({link_key:newKey});

        }catch(err){
            throw new Error('DynamoDB Error');
        }
        if (!linkFoundWithKey){
            keepCheckingForDuplicateKeys = false
        }else{
            newKey = nanoid(keyLength);
        }
    }

// carries out checks to see if that URL exists, if it doesnt create a new document in our DB
    try{
        return await linksModel.create({
            link_key: newKey,
            original_link: oringinalURL
        })
    }catch(error){
        throw new Error('DynamoDB Error');

    }
}

export default createLinkService;