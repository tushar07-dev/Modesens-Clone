const express=require("express");
const connection = require("./mongoDb")
const modesensRouter=require("./Routes/User")
const cors=require("cors")
const app= express();



app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(
    cors({
        origin:["https://modesens-clone-web16.herokuapp.com"]
    })
)
app.use("/",modesensRouter)
app.use("/modesens",modesensRouter)

const PORT=process.env.PORT ||8080
app.listen(PORT,async()=>{
    try {
        await connection
        console.log("Connected to do");
    } catch (error) {
        console.log("err",error);
    }
})
