const express =require("express")
const app=express();

require("./config/mongoose")

const cors=require("cors");
app.use(cors({
    origin: "http://localhost:3000",  
    credentials: true,
}));

require("./routes/User.routes")

app.use(express.json(express.urlencoded({extended: true})))

app.listen(8000,()=>console.log('listenning on port : 8000'))