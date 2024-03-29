let mongoose= require("mongoose");
mongoose.connect("mongodb://127.0.0.1/FUEM")
.then(()=>console.log("mongodb connected"))
.catch(()=>console.log("failed to connect to db"));

const userModel = new mongoose.Schema({

    name:String,
    number:Number,
    address:String,
    quantity:Number
    // name:{
    //     name:String,
    //     required:true
    // },
    // number:{
    //     mobile:String,
    //     required:true
    // },
    // address:{
    //     address:String,
    //     required:true
    // },
    // quantity:{
    //     quantity:Number,
    //     required:true
    // }
});

const collection = new mongoose.model("users",userModel);
module.exports=collection;