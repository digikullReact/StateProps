const express=require("express");
const cors=require("cors");



const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const arr=[
    {
      "_id": "6158546da269fbd8e07f66b6",
      "balance": "$1,933.72",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "eyeColor": "green",
      "name": "Franco Mercado",
      "gender": "male",
      "company": "BRAINQUIL",
      "email": "francomercado@brainquil.com",
      "phone": "+1 (954) 495-2847"
    },
    
  ]

app.get("/api/data",(req,res)=>{

    res.json(arr);
 

 //  --->Db operatio



})

app.post("/api/addRecord",(req,res)=>{

  arr.push(req.body);

  res.json({msg:"Success"});



})


app.listen(8080,()=>{
    console.log("Server Running at port 8080")
})