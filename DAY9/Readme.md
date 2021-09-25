# SENDING STATIC FILES ON THE FRONTEND

1. To find the path of the any directory you just have to use simple global variable "__dirname" which is provided by node which gives the path of the file in which it is used. We use this variable just to know the path during the deployment time.
    - Refer index.js file(line 4) -> OUTPUT: E:\Backend_THAs\DAY9.

2. sendFile ->  - This helps to send the file from the server to the frontend. <br>
                - This sets the content type on the web so that the web application can render the file according to its type. <br>
                REFER TO THE INSPECT->NETWORK->LOCALHOST->RESPONSE HEADER-> CONTENT TYPE <br>

NOTE:   Response header server side se aata h & Request header jo client side se hum server side bhejte hai.

3. To specify the path of the file we use "path module". Path module helps to specify the particular path of the file using __dirname and with __dirname we use the path of the folder and the file. 
    - When we specify the path of the file to be render on the frontend, we use two parameter in the sendFile in which the second parameter contains the file name which will be shown on the web application.
    REFER index.js file more the usage of the above content.

4. To make the file downloadable on the user system, we use "res.download" and inside it we specify the path module to make the path of the file accesible and on reload the hello.json file gets downloaded. The downloaded file name will be same as we write in the second parameter of the res.download() function.<br>

NOTE: We can send any type of file in the download function.

# JADE (Converted into HTML)
    - To install jade write command -> npm i -s jade
    - Jade is basically works like html but syntax is different.
    - To make jade file, use .jade after the filename.
    - Firstly we have to set the path of the jade folder i.e views.<br>
    ~ To tell the express that we are using jade we have to set the path of the jade folder through middleware.<br>
    ~ We will use jade for "view engine". view/template engine is nothing but the engine we see the rendered content of the HTML.
    - Then make two file namely index.jade & layout.jade.
    - In index.jade we basically write the content which we have to render on the web application.
    - extends-> import/require. extends layout imports the layout file in index.jade
    - block -> div
    - When we have to render the block content in the layout file we have to do like this.
    - when the title has to be rendered, we write it in the #{title} so that it renders the content.
    - layout.jade contains the syntax like of html and tab space is important for smooth working.
    - In body, we are using the content from the index.jade file
    - To send the value of title, we have to send the response in render function i.e {key: value pair}

# WHAT IS COOKIE?
    - Internet Cookie are built specially for internet  web browsers to track,personalize and save the  information about each user session.
    - Cookies are created  to identify the user when he/she  vists the website again.
    - Browser cookies are identified and read by “name-value” pairs. These tell cookies where to be sent and what data to recall.
    - The server only sends the cookie when it wants the web browser to save it. If you’re wondering “where are cookies stored,” it’s simple: your web browser will store it locally to remember the “name-value pair” that identifies you.
    - If a user returns to that site in the future, the web browser returns that data to the web server in the form of a cookie. This is when your browser will send it back to the server to recall data from your previous sessions.
    - Websites use HTTP cookies to streamline your web experiences. Without cookies, you’d have to login again after you leave a site or rebuild your shopping cart if you accidentally close the page. Making cookies an important a part of the internet experience.
    - Cookies are intended to use for 3 reasons -: Session Management, Personalization, Tracking.

6. When the user login, we set the cookies in the browser using token so that when the user login again the token present in the redis gets the previous session data and send back it to the server. Cookie are stored in the web browser itself so that when the user comeback again the cookies which are stored locally to remembered the "name-value pairs" that helps to identify the user. 

7. npx express-generator to install the express modules and packages.

8. Another way to send the file on the server is ny using express.static