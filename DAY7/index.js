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

// const slash = (req,res) => {
//     res.json({a:1});  //json is the most common used keyword (only json can be written inside the response)
// };

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

//PIPELINING

app.get("/" , (req,res) => {
    res.status(200).send("hello");  // This is known as pipelining(Function after another function)
});

//------------------------------------------------------------------------------------------------------------------------------------//

// app.get("/", slash);  // When we make changes in the url we are reading / performing GET operation. This will print the "hello" text on http://localhost:5000/


//--------------------------------------------------------------------------------------------------------------------------------------//

//QUERY PARAMS

// app.get("/products" , (req,res) => {
//     res.send(req.query);
// });

//-------------------------------------------------------------------------------------------------------------------------------------//

// URL-CASES

// app.get("/ab?cd" , (req,res) => {  // To send the reult if it is abcd/ acd
//     res.send("We can use b in url but if we write acd it will work the same");  //http://localhost:5000/acd
// });

// app.get("/ab+cd", (req,res) => {  //http://localhost:5000/abbbbbbcd
//     res.send("We can write b as many times but this will print same result");
// })

// app.get("/ab*cd" , (req,res) => {  //http://localhost:5000/abcdscdfdsfdcd
//     res.send("Using * we can handle this type of request when anything can come in between ab & cd and it will work same")
// })


// app.get("/ab(cd)?e" , (req,res) => {  //http://localhost:5000/abe
//     res.send("We can club two or more variables like cd. It is optional to use cd")
// })

// RegExp

// app.get(/a/ , (req,res) => {  //http://localhost:5000/ajdnjdncdjcn
//     res.send("This will give the result if the set variable starts with 'a' and it doesn't matter what comes after 'a'. This is called RegExp")
// })

// app.get(/.*fly$/,(req,res) => {  // http://localhost:5000/butterfly
//     res.send("Another example of RegExp. In this fly must come at the last.")
// })

app.get("/user/:userId/books/:bookId" , (req,res) => {  //http://localhost:5000/user/1/books/2
    res.send(req.params);  //We can handle the variable state by using : i.e :bookId and :userId
})
//---------------------------------------------------------------------------------------------------------------------------------//
app.listen(5000);  //Will listen at port 5000