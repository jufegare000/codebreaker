const app = require("./index");
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.listen(port, host, function() {
    console.log("Server started.......");
    console.log(port);
 });