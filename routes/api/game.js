const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Guess = require('../../models/Guess');
const validateGuessInput = require('../../validation/guess');



router.get("/test", (req, res) => res.json({msg: "This is the game page"}))

router.post("/",
    passport.authenticate("jwt", {session: false}),
    (req, res)=>{
        const{isValid, errors } = validateGuessInput(req.body)

        if(!isValid){
            return res.status(400).json(errors)
        }

        const newGuess = new Guess({
            // user = req.user.id,
            text: req.body.text
        })

        newGuess.save(guess => res.json(guess))
    }
)

module.exports = router