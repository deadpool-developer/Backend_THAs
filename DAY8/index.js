const express = require("express");
const app = express();
const body_parser = require("body-parser");
//-----------------------------------------------------------------------------------------------------------------------------------//

// app.get("/" , (req,res,next) => {
//     console.log("In first function");
//     next();
// },
// (req,res) => {
//     res.status(200);
//     res.send("hello")
// }
// )

//-------------------------------------------------------------------

// const checkAdmin = (req,res,next) => {
//     if(req.query.admin === 'true'){
//         next()
//     }
//     else{
//         res.status(400).send("Should be admin");
//     }
// };


// const sendRes = (req,res) => {
//     res.status(200);
//     res.json(req.query);
// };

// app.get("/",checkAdmin,sendRes);

//------------------------------------------------------------------

//NOTE: If we want to use the function checkAdmin in every fucntion then we can simpy use express feature -> app.use(function name)

// const checkAdmin = (req,res,next) => {
//     if(req.query.admin === 'true'){
//         next()
//     }
//     else{
//         res.status(400).send("Should be admin");
//     }
// };

// app.use(checkAdmin);  //It's sequence matters as it will not respond the way it has to

// const sendRes = (req,res) => {
//     res.status(200);
//     res.json(req.query);
// };

// app.get("/",sendRes);

//-------------------------------------------------------------------------------------------------------------------------------------//

const sendRes = (req,res) => {
    res.status(200);
    res.json(req.query);
}

app.use(body_parser);

app.post('/' , (req,res) => {
    console.log("req.body ->", req.body);
    res.json({text: req.body})
})
//------------------------------------------------------------------------------------------------------------------------------------//
app.listen(4000);