const express = require("express");
const app = express();


app.get("/page",(request,response)=>{
    response.sendFile("./BMICalculator.html",{ root: __dirname})
})



app.listen(4040);


