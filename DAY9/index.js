const express = require("express");
const path = require("path");
const app = express();

// console.log(__dirname);

app.set("views" , path.join(__dirname , "public/views"));
app.set("view engine" , "jade");

// 
app.use("/" , (req,res) => {
    // res.sendFile(path.join(__dirname , "public/Hello.txt") , "test.txt");  //To send the file to the frontend (content type -> text/plain; )
    // res.sendFile(path.join(__dirname , "public/hello.json"));  //To see the content type of this file i.e application/json;
    // res.download(path.join(__dirname , "public/Hello.json") , "hello.json");  // Downloads the Hello.json file in the user system on reload
    // res.render('index', {title: "Express"}); //Set the title as Express
    res // This is how we can do pipelining
    .status(201)  //send the status 201 when user login
    .cookie("token" , "test" , {  // Sets the token to test
        expires: new Date(Date.now() + 8 * 3600000)  //Sets the expiry of the token test for 8 hours (user session willautomatically gets expired after 8 hours)
    })
    .cookie("hello" , "hello")  // Another Cookie
    .redirect(301,"/admin")  // Redirects to the admin page after successful login(status code, url)
})


app.listen(7000);