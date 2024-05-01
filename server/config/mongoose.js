const mongoose=require("mongoose")

mongoose.connect('mongodb://127.0.0.1/GestionPFE')
    .then(()=>console.log('connected to MongoDB'))
    .catch(err=>console.error(err))