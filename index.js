import express from "express";
import bodyParser from "body-parser";
import TCGdex from '@tcgdex/sdk';

const tcgdex = new TCGdex();
const app = express();
const port = 8005;
let card = '';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', async (req,res,next) => {
    const cards = await tcgdex.fetch("cards");
    res.render('index.ejs', {
        inputs: cards,
        card: card
    });
    next();
})

app.post('/search', async (req,res,next) => {
    let globalId = req.body.search;
    card = await tcgdex.fetch('cards', globalId);
    res.redirect('/');
    next();
})

app.listen(port, () => {
    console.log(`pokemon-card running on ${port}`);
})