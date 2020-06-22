const express = require('express')
const { data } = require("../data/card-data.json")
const { cards } = data;

const router = express.Router();

router.get('/', (req, res)=>{
    const numberOfCards = cards.length;
    const flashcardId = Math.floor( Math.random() * numberOfCards)
    res.redirect(`/card/${flashcardId}?side=question`)

})

router.get('/:id', (req, res)=>{

        const { side } = req.query;
        const { id } = req.params;
        
        if (!side) {
            return res.redirect(`/card/${id}?side=question`)
        }

        const name = req.cookies.username;
        const text = cards[id][side];
        const { hint } = cards[id];
        const templateData = { id, text, name };

        if (side === 'question') {

            templateData.hint = hint;
            templateData.sideToshow = 'answer';
            templateData.sideToShowDisplay = 'Answer';

        } else if (side === 'answer') {

            templateData.sideToshow = 'question';
            templateData.sideToShowDisplay = 'Question';
        }

    res.render('card', templateData);
})

module.exports = router;