const moongoose=require("mongoose");

const userData=new moongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    mobileNo:Number,
    city:String,
    Adress:String,
    Gender:String 
})

module.exports=moongoose.model("employee",userData);