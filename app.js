const express = require("express");
const Router = require("./routes");
const app = express();

app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(express.json({ limit: "50mb" }));

// app.use("/register", async (req, res) => {
// 	try {
// 		const user = await db.Users.create({ ...req.body });
// 	} catch (error) {}
// });
app.use("/", Router);

app.listen(3000, () => {
	console.log("running on port 3000");
});
