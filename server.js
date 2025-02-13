import express from "express";
const app = express();
//used to define routes, middleware, and other server configurations.

app.use(express.static("dist"));
//This line tells the Express application to serve static files from a directory named dist
app.listen(80);
//starts the Express server and makes it listen for incoming requests on port 80.
