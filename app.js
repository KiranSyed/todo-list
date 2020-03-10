const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
var items = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.get("/", (req,res)=>{
	const todaysDate = new Date();
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long"

	}
	let day = todaysDate.toLocaleDateString("en-US", options)
	res.render("list", {day: day, newItem: items});
});
app.post("/", (req, res)=>{
	let item = req.body.newItem;
	items.push(item);
	res.redirect("/");

});
app.listen(port, ()=>{
	console.log("server started ...");
});