import express from "express";
import bodyParser from "body-parser";
import settings from "./service/settings";
import helloRouter from "./routes/hello";

const app = express();

// Register middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Register routes
app.use("/hello", helloRouter);

// Catch all 404s
app.use((req, res) => {
  res.sendStatus(404);
});

// Start the server
const port = settings.port;
app.listen(port, () => console.log(`API is listening on port ${port}`));
