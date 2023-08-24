import { link } from 'fs'
import dynamoose from '../../infra/AWS/DynamoDB/dynamoose.client'

const linkSchema = new dynamoose.Schema(object:{
    link_key:{
        type:String,
        hashkey: true
    },
    original_link:{
        type: String,
        required:true
    }
})

export default linkSchema;