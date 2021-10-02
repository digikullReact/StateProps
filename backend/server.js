const express=require("express");
const cors=require("cors");



const app=express();

app.use(cors());


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
    {
      "_id": "6158546debf5b930e74a3607",
      "balance": "$3,772.81",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "green",
      "name": "Kathie Donaldson",
      "gender": "female",
      "company": "ZAGGLES",
      "email": "kathiedonaldson@zaggles.com",
      "phone": "+1 (824) 529-2187"
    },
    {
      "_id": "6158546d10cab64afde88ca2",
      "balance": "$1,904.85",
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "eyeColor": "green",
      "name": "Brenda Abbott",
      "gender": "female",
      "company": "OULU",
      "email": "brendaabbott@oulu.com",
      "phone": "+1 (809) 513-3555"
    },
    {
      "_id": "6158546db32dbb93eba88a54",
      "balance": "$2,364.52",
      "picture": "http://placehold.it/32x32",
      "age": 39,
      "eyeColor": "brown",
      "name": "Roseann Ferguson",
      "gender": "female",
      "company": "GOKO",
      "email": "roseannferguson@goko.com",
      "phone": "+1 (887) 548-2979"
    },
    {
      "_id": "6158546df1cbb0a4c7b9d7e8",
      "balance": "$1,347.13",
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "eyeColor": "brown",
      "name": "Sonia Bright",
      "gender": "female",
      "company": "MARKETOID",
      "email": "soniabright@marketoid.com",
      "phone": "+1 (810) 400-3333"
    },
    {
      "_id": "6158546d3c10020162206120",
      "balance": "$1,898.88",
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "eyeColor": "brown",
      "name": "Carissa Callahan",
      "gender": "female",
      "company": "FLUMBO",
      "email": "carissacallahan@flumbo.com",
      "phone": "+1 (873) 504-2743"
    },
    {
      "_id": "6158546d6a709c0fa2a1876d",
      "balance": "$3,364.61",
      "picture": "http://placehold.it/32x32",
      "age": 24,
      "eyeColor": "green",
      "name": "Britney Huber",
      "gender": "female",
      "company": "KROG",
      "email": "britneyhuber@krog.com",
      "phone": "+1 (872) 504-3323"
    },
    {
      "_id": "6158546d113dd8cf0c542b7b",
      "balance": "$2,213.77",
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "eyeColor": "brown",
      "name": "Norma Lynch",
      "gender": "female",
      "company": "ECOLIGHT",
      "email": "normalynch@ecolight.com",
      "phone": "+1 (869) 471-3421"
    }
  ]

app.get("/api/data",(req,res)=>{

    res.json(arr);
 

 //  --->Db operatio



})


app.listen(8080,()=>{
    console.log("Server Running at port 8080")
})