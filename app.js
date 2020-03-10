const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
var items = [];
var workItems = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static("public"))
app.get("/", (req,res)=>{
	const todaysDate = new Date();
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long"

	}
	let day = todaysDate.toLocaleDateString("en-US", options)
	res.render("list", {listTitle: day, newListItems: items});
});
app.post("/", (req, res)=>{
	let item = req.body.newItem;
	console.log(req.body.list);
	if (req.body.list==="Work")
	{
		workItems.push(item);
		res.redirect("/work");
	}
	else
	{
		items.push(item);
		res.redirect("/");
	
	}
	
});
app.get("/work", (req,res)=>{
	res.render("list", {listTitle: "Work List", newListItems: workItems});
});
app.listen(port, ()=>{
	console.log("server started ...");
});