const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req,res) => {
    res.send("Hello world from API");
});

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})