const express =  require('express');
const router = require("./routes/pages");

const app = express();
const PORT = 3000;

//implementing routes
app.use(router);

// assign port
app.listen(PORT, () =>{
    console.log(`Server is runnong on http://localhost:${PORT}`)
});