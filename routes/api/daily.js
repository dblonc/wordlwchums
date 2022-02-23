const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Guess = require('../../models/Guess');
const Word = require('../../models/Word');
const User = require('../../models/User');
const validateGuessInput = require('../../validation/guess');

const dailyGame = (req, res) =>{
    const word = "BLAME"
}

router.post("/",
    passport.authenticate("jwt", {session: false}),
    (req, res)=>{
        const{isValid, errors } = validateGuessInput(req.body)

        if(!isValid){
            return res.status(400).json(errors)
        }

        const newGuess = new Guess({
            user:  req.user.id,
            text: req.body.text
        })
        console.log(newGuess)
        newGuess.save().then(guess => res.json(guess))
    }
)

module.exports = router