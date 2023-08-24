import * as dynamoose from "dynamoose";

if (process.env.NODE_ENV == "production") {
	console.log("we will fill in production details later");
} else {
	dynamoose.aws.config.update({
		accessKeyId: "AKID",
		secretAccessKey: "SECRET",
		region: "eu-central-1",
	});
	dynamoose.aws.ddb.local();
}

export default dynamoose;
