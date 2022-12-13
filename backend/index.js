const express = require("express");
const http = require("http");

const calculatorRoutes = require("./routes/routes");

const app = express();

app.get("/", (req, res) => {
    console.log("Reaching the server");
    res.send("welcome my calcurator")
})

app.use(express.json());
app.use("/api/v1/calculator",calculatorRoutes);

const port = 8001;
const server =http.createServer(app).listen(port,()=>{
    console.log(`Server started on port ${port}!`);
})

module.exports =server;
