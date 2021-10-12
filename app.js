const express = require("express");
const Router = require("./routes");
const cors = require("cors");
const app = express();

var corsOptions = {
	origin: "http://localhost:3000",
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors());
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(express.json({ limit: "50mb" }));

app.use("/", Router);

app.listen(3001, () => {
	console.log("running on port 3001");
});
