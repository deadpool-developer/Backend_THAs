** EXPRESS MIDDLEWARE **

- We can write two or more functions in the same get request by using 'next' as a third paramter with req & res. To use the two functions one after the another or want to run the first function then second, the 'next' keyword comes into picture.
    - To know the use of it refer the following example: <br>
        app.get("/" , (req,res,next) => { <br>
    console.log("In first function");<br>
    next();<br>
},<br>
(req,res) => {<br>
    res.status(200);<br>
    res.send("hello")<br>
}
);

    - In this, the console.log will execute and print the statement in the console and then the second function will execute and it will be reflected in the web page/ postman.
    - This is known as middleware. 

- MIDDLEWARE(Used during Permission System, Authorization, login etc)

    - When a function is declared before the main function to check the ok working of the function declared is known as middleware. The function contain the extra parameter called 'next' which runs the main function.

- If we want to give access to admin only/to check the specific url then we use middlewares to make it work:
    - Use if-else condition.
    - refer to index.js file line 16-30.

- If we want to check the specific url in every url then we can simply use the express feature i.e. app.use(function name);

    - Refer index.js file line number 37-55.

- When we first send the response then it all went okay it'll show 200 status code which means OK. But when we refresh the page it's status code changes to 304 which means nothing is MODIFIED. This thing happen because the response gets cached for performance sake.

- Every get request gets cached. But what if we want to sign in and our password too gets cached? Then her comes the security issue as anyone can get access to the cache and get the password.

    - To avoid this situation we generally send the password in POST request as POST request do not get cached.
    - POST requests are send the form of form-data or JSON format as it is used 90% of the time.

-