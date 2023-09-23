import express from "express";
import bodyParser from "body-parser";
import TCGdex from '@tcgdex/sdk';

const tcgdex = new TCGdex();
const app = express();
const port = 8005;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
const cards = await tcgdex.fetch("cards");

app.use('/', (req,res) => {
    // console.log(cards);
    res.render('index.ejs', {
        inputs: cards
    });
})

app.use('/get_card', async (req,res) => {


})

const get_card = await tcgdex.fetch('cards', 'card-global-id');

app.listen(port, () => {
    console.log(`pokemon-card running on ${port}`);
})