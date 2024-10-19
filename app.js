const express= require('express');
const path= require('path');
const app= express();
const ejsmate= require('ejs-mate');

let port=8080;

app.set("view engine","ejs");
app.engine("ejs",ejsmate);

app.set("views",path.join(__dirname,"views"));

// app.use(express.static("public"));

app.use(express.static(path.join(__dirname,"/public")));

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})

app.get("/", (req,res)=>{
    res.render("tasks/index.ejs"); 
})

