import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;
let todayItems = ["Wake-up", "Code", "Eat", "Sleep","Repeat"];
let workItems = ["Code", "Error", "Debug","Refator"];

//Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

const date = new Date;
const currentDay = date.toDateString();
//Routes
app.get('/', (req, res)=>{
    res.render("index.ejs",{ listTitle: currentDay, newItem : todayItems});
})

app.get('/work', (req, res)=>{
    res.render("index.ejs",{listTitle : "Work Title", newItem : workItems});
})

app.post('/', (req, res)=>{
    let item = req.body["newItem"];
    const btn = req.body["list"];
     if (btn === "Work"){
        workItems.push(item);
        res.redirect("/work");
    } else{
        todayItems.push(item);
        res.redirect("/");
    }
});

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
});