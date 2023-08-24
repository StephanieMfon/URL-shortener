import express, { Application, urlencoded } from "express";
import linkRoutes from "./routes/link.routes";
const app: Application = express();
const port: number = 3002;

// middlewares

app.use(express.json());
app.use(express.urlencoded());
app.use(linkRoutes);

// First endpoint

app.get("/", (req, res) => {
	res.send("okay");
});

app.listen(port, () => {
	console.log(`App is listening on port ${port}`);
});
