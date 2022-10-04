const express = require("express");
const app = express();
import path from 'path';

app.use(express.static("public"));

app.get('/endpoint', (req, res) => {
    res.send({ message: "ok ok ok" });
});

app.get('/ducks', (req, res) => {
    res.sendFile(path.resolve("/public/duck.html"));
});

app.listen(3000, () => {
    console.log('Server is running on', 3000);
});