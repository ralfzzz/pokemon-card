import express from "express";
import axios from "axios";

const app = express();
const port = 8005;

app.use(express.static('public'));

app.use('/', (req,res) => {
    res.render('index.ejs');
})

app.listen(port, () => {
    console.log(`pokemon-card running on ${port}`);
})