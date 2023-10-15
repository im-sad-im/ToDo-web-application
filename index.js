import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get('/', (req, res)=>{
    const date = new Date;
    const currentDay = date.toDateString();
    res.render("index.ejs",{ todayDate: currentDay});
})
app.get('/work', (req, res)=>{
    res.render("work.ejs");
})

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
});