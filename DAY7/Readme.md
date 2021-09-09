<h1>EXPRESS & IT's INSTALLATION</h1>

1. To make the npm work in a folder we have to tell that this folder will contain nodeJs files. So, we have to install the package.json packages in our file as -> npm init

2. To install express modules we have to write -> npm install --save express (this will install the node_modules files of express)

3. "version": "1.0.0"
    - 1(denotes the breaking change in the code which contain new user experience(major version)).
    - 0(denotes the minor chnages/new features in the code(minor version)).
    - 0(denotes the bug fixed in the code).

4. We run our react projects on local host during development stage. Similarly, to run the nodeJs in development stage we have to install the nodemon modules. 
    - To install nodemon module -- npm install --save-dev nodemon (This will install nodemon in node_modules folder)

5. What is the differnce between the --save & --save-dev?
    - As we know there are two stages, development & production. So, during production stage we have to make our code run fast and execute fast so the express modules get install in dependencies folder (Check it in package.json file)
    - Similarly, during the development stage we do not need fast execution so we use --save-dev and it gets installed in devDependencies (Check it in package.json)

<br><img src= "dependencies.png" width = "800" alt= ""><br>

6. To run nodemon  
    - nodemon index.js (nodemon will start watching index.js file and every change in that file will be visible at the server).
    - We have to make index.js file and inside it we have to use express and it functionality (refer index.js file)
    - If nodemon do not run and show error try adding it in scripts inside package.json as "server": "nodemon index.js(fileName)".

7. res.send is common as it can take array,json,string. So, to maintain specificity we use particular keyword with res. JSON is the most commonly used keyword.

8. Three basic words must be remembered in backend

    - Security
    - Performance
    - Edge Cases

9. When function is written after another function then it is known as pipelining. For example-:
    app.get("/" , (req,res) => {
    res.status(200).send("hello");
    });

10. When we have to redirect to new page and fetch the data i.e http://localhost:5000/products?limit=50&q=something_something.
In this we are requesting the products with limit of 50 pages and searching(q) something_something
    - In first we were sending a GET request to get the response back.
    - When we want to see the products we are requesting it so it will come under request.
    - app.get("/products" , (req,res) => {
        res.send(req.query);  // This will return the JSON object called query params(refer postman for this)<br>
        });

    <img src="Query param.png" alt="" />
    - To get the specific limit or searched item we write:
        app.get("/products" , (req,res) => {
        res.send(req.query.q);
        });

11. If we want to get the same result in different url, we generally use this command <br>
    app.get("/ab?cd" , (req,res) => { 
    res.send("abcd");  
});<br>
This will show the same result in abcd and acd as we have used 'b' as optional in the url

12. If we want to use any particular character n number of times in the url we can write it in this way: <br>
    app.get("/ab+cd", (req,res) => {
    res.send("We can write b as many times but this will print same result");<br>
})

13. RegExp-: - A regular expression is an object that describes a pattern of characters.
             -Regular expressions are used to perform pattern-matching and "search-and-replace" functions on text.
             SYNTAX:
                - /pattern/modifiers;
                - var patt = /w3schools/i  --no matter what comes after w3schools in the url, it will give the same result