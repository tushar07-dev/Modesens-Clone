const {Router}=require("express")
const { Kids,Beauty, Cart} =require("../model/user")

const modesensRouter=Router()

modesensRouter.get("/",(req,res)=>{
    res.send("Your Modesens Application Is Working Very Well")
})
// ...Kids route data............................//
modesensRouter.post("/kids",async(req,res)=>{
    const Data= await new Kids({...req.body})
    Data.save((err,success)=>{
        res.send(" Data has been recieved")
    })
})

modesensRouter.get("/kids",async(req,res)=>{
    const kidsData=await Kids.find()
    return res.json(kidsData)
})

// Beauty route Data.........................//
modesensRouter.post("/beauty",async(req,res)=>{
    const Data= await new Beauty({...req.body})
    Data.save((err,success)=>{
        res.send(" Data has been recieved")
    })
})

modesensRouter.get("/beauty/:id",async(req,res)=>{
    const {id}=req.params
    const newsData=await Beauty.find({_id:id})
    return res.json(newsData)
})

modesensRouter.get("/beauty",async(req,res)=>{ 
    const params=req.query
    if(params){
        console.log(params);
        const Data=await Beauty.find(req.query)
        return res.json(Data)
    }
    const beautyData=await Beauty.find()
    return res.json(beautyData)
   
    
})

// cart.............
modesensRouter.post("/Cart",async(req,res)=>{
    const Data= await new Cart({...req.body})
    Data.save((err,success)=>{
        res.send(" product added succesfully")
    })
})


modesensRouter.get("/Cart",async(req,res)=>{
    const cartData=await Cart.find()
    return res.json(cartData)
})

// delete cartdata

modesensRouter.delete("/Cart/:id",async(req,res)=>{
    const {id}=req.params
    console.log(id);
    const deletedData=await  Cart.deleteOne({_id:id})
    return res.json(deletedData)
})


module.exports=modesensRouter