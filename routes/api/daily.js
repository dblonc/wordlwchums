const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Guess = require('../../models/Guess');
const Word = require('../../models/Word');
const User = require('../../models/User');
const validateGuessInput = require('../../validation/guess');

const dailyGame = (req, res) =>{
    const word = "BLAME";
    // const guessedWord = "",



}
const wordBank = ["BLAME", "LOVES", "SOLVE", "CAULK", "PLACE"]
const dailyWord = wordBank[Math.floor(Math.random()* wordBank.length)]
router.post("/",
passport.authenticate("jwt", {session: false}),
(req, res)=>{
        const{isValid, errors } = validateGuessInput(req.body)
    
        if(!isValid){
            return res.status(400).json(errors)
        }
        const dailyWordSplit = dailyWord.split("")

        let split = req.body.guess.toUpperCase().split("")
        let guessedLetters = ["grey","grey","grey","grey","grey"]
        for (let i = 0; i < split.length; i++) {
            let ele = split[i];
            if(ele === dailyWordSplit[i]){
                guessedLetters[i] = "#538d4e";
                dailyWordSplit[i] = " ";
            }
            // if(dailyWordSplit.includes(ele)){
            //     if(ele === dailyWordSplit[i]){
            //         guessedLetters[i] = "#538d4e"
            //     }else{
            //         guessedLetters[i] = "#b59f3b"
            //     }
            // }else{
            //     guessedLetters[i]="grey"
            // }
            
        }
        for (let i = 0; i < split.length; i++){
            let ele = split[i];
            if (guessedLetters[i] !== "#538d4e" && dailyWordSplit.includes(ele)){
                guessedLetters[i] = "#b59f3b"
                dailyWordSplit[i] = " ";

            }
        }
        res.json(guessedLetters)
        // if(req.body.guess.split("") === dailyWordSplit){
        //     res.json(true)
        //     console.log("true")
        // }else{
        //     res.json(false)
        // }
        // return true
        
    }
)

module.exports = router