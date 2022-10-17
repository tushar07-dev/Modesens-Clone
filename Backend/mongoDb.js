const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://chaithanya:chaitu786@cluster0.cfqxuxp.mongodb.net/modesens?retryWrites=true&w=majority")


module.exports=connection