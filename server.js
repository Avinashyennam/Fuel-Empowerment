let express=require("express");
let bodyParser=require("body-parser");
let path=require("path");
// import collection from "./db.js";
let collection = require("./db");
let app=express();
app.use(express.json());
// app.use(express.static("./public"))
// app.use(express.static(path.join(__dirname,'./public')));
app.use(express.static(path.join(__dirname,'../sdc_hack/public')));


console.log(path.join(__dirname,"../sdc_hack/public"));
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './views', 'index.html'));   
});
app.get('/public/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'style.css'));
});
app.get('/public/client.js', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'script.js'));
});

app.get("/location.html",(req,res)=>{
    res.sendFile(path.join(__dirname, './views', 'location.html'));
});
app.get("/public/style_location.css",(req,res)=>{
    res.sendFile(path.join(__dirname,'./public', 'style_location.css'));
});
app.get("/type.html",(req,res)=>{
    res.sendFile(path.join(__dirname, './views', 'type.html'));
});
app.get("/public/style_type.css",(req,res)=>{
    res.sendFile(path.join(__dirname,'./public', 'style_type.css'));
});
app.get("/info.html",(req,res)=>{
    res.sendFile(path.join(__dirname, './views', 'info.html'));
});
app.get("/public/style_info.css",(req,res)=>{
    res.sendFile(path.join(__dirname,'./public', 'style_info.css'));
});
app.post("/customerinfo",async (req,res)=>{
    // const {name,mobile,address,quantity}=req.body;
    // if(name){
    //     l = {
    //         peru:name,
    //         vlg:address,
    //         phone:mobile,
    //         ltrs:quantity
    //     };
    //     return;
    // res.send(`${l.peru} ${l.vlg}`);
    let data={
        name:req.body.name,
        mobile: req.body.mobile,
        address:req.body.address,
        quantity: req.body.quantity
    }
  
    await collection.insertMany([data]);
    // res.status(401).send("please provide name");
});


app.listen(80,()=>{
    console.log("server is running");
});
// module.exports=l;