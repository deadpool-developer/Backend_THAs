const express = require("express");
const app = express();

//CRUD(create, read, update, delete) -> POST, GET, PUT, DELETE

//Function slash contain two parameters, req & res (we can use any variable but req & res is used as a standard). In this function we are sending a response hello on /

//------------------------------------------------------------------------------------------------------------------------------------//

// const slash = (req,res) => {  
//     res.send("hello");  "send" can send string
// };

//---------------------------------------------------//

// const slash = (req,res) => {  
//     res.send({a :1});  "send" can send object
// };

//-----------------------------------------------------//

// const slash = (req,res) => {  
//     res.send(["a"]);  "send" can send array
// };

//-------------------------------------------------------------------------------------------------------------------------------------//

const slash = (req,res) => {
    res.json({a:1});  //json is the most common used keyword (only json can be written inside the response)
};

//----------------------------------------------------------------------------------------------------------------------------------//

//STATUS CODE

//-------------------------------------------------------//

// app.get("/" , (req,res) => {
//     res.sendStatus(200);  //Everything went okay
//     res.send();
// });

//-------------------------------------------------------//

// app.get("/" , (req,res) => {
//     //db updates
//     res.sendStatus(201);  //updated successfully
//     res.send();
// });

//--------------------------------------------------------//

// app.get("/" , (req,res) => {
//     res.sendStatus(400);  //Bad request(Client side validation error)  ...401,402,403 works same
//     res.send();
// });

//---------------------------------------------------------------------------------------------------//

// app.get("/" , (req,res) => {   
//     res.sendStatus(500);   // Internal server error(Yha pr jo likh rhey h usmei koi dikaat hai)  ...501,502,503 works same
//     res.send();
// });

//-------------------------------------------------------------------------------------------------------------------------------------//

app.get("/", slash);  // When we make changes in the url we are reading / performing GET operation. This will print the "hello" text on http://localhost:5000/

app.listen(5000);  //Will listen at port 5000