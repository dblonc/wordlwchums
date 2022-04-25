const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Guess = require('../../models/Guess');
const Word = require('../../models/Word');
const User = require('../../models/User');
const validateGuessInput = require('../../validation/guess');


const wordBank = ["BLAME", "LOVES", "SOLVE", "CAULK", "PLACE", "APPLE", "GROSS", "SHOOT", "REAMS"]

// chooses a random word from the word bank
const dailyWord = wordBank[Math.floor(Math.random()* wordBank.length)]

router.post("/",
passport.authenticate("jwt", {session: false}),
(req, res)=>{
        const{isValid, errors } = validateGuessInput(req.body)
    
        if(!isValid){
            return res.status(400).json(errors)
        }
        //splits the generated word
        let dailyWordSplit = dailyWord.split("")

        //splits the input response
        let split = req.body.guess.toUpperCase().split("")
        
        // setup letters hash
        let lettersHash = {};
        dailyWordSplit.forEach(letter => lettersHash[letter] = 0);
        dailyWordSplit.forEach(letter => lettersHash[letter] +=1);

        // sets default colors to grey. if there are no letter matches, the ele 
        // of this array does not change
        let guessedLetters = ["grey","grey","grey","grey","grey"]
        
        // does a first pass to see if there are any matching indexes
        // if there is, the colors array gets updated to pass up the green hex
        // and the letter is decrimented from the letters hash

        for (let i = 0; i < split.length; i++) {
            let ele = split[i];
            if(ele === dailyWordSplit[i] && lettersHash[ele] !== 0){
                guessedLetters[i] = "#538d4e";
                lettersHash[ele] -= 1;
            }
      
        }

        // after that first pass, loop again to find letters that are in the word
        // but only if there is still a letter to find in the letters hash

        for (let i = 0; i < split.length; i++){
            let ele = split[i];
            if (guessedLetters[i] !== "#538d4e" && dailyWordSplit.includes(ele) && lettersHash[ele] !== 0){
                guessedLetters[i] = "#b59f3b"
                lettersHash[ele] -= 1;

            }
     
        }
        
        res.json(guessedLetters)
     
        
    }
)

module.exports = router