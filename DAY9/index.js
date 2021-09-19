const express = require("express");
const path = require("path");
const app = express();

// console.log(__dirname);

app.set("views" , path.join(__dirname , "public/views"));
app.set("view engine" , "jade");


app.use("/" , (req,res) => {
    // res.sendFile(path.join(__dirname , "public/Hello.txt") , "test.txt");  //To send the file to the frontend (content type -> text/plain; )
    // res.sendFile(path.join(__dirname , "public/hello.json"));  //To see the content type of this file i.e application/json;
    // res.download(path.join(__dirname , "public/Hello.json") , "hello.json");  // Downloads the Hello.json file in the user system on reload
    res.render('index', {title: "Express"});
})


app.listen(7000);