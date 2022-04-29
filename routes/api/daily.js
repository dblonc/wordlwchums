const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Guess = require('../../models/Guess');
const Word = require('../../models/Word');
const User = require('../../models/User');
const validateGuessInput = require('../../validation/guess');


const wordBank = ["CIGAR","REBUT","SISSY","HUMPH","AWAKE","BLUSH","FOCAL",
"EVADE","NAVAL","SERVE","HEATH","DWARF","MODEL","KARMA","STINK",
"GRADE","QUIET","BENCH","ABATE","FEIGN","MAJOR","DEATH","FRESH",
"CRUST","STOOL","COLON","ABASE","MARRY","REACT","BATTY","PRIDE",
"FLOSS","HELIX","CROAK","STAFF","PAPER","UNFED","WHELP","TRAWL",
"OUTDO","ADOBE","CRAZY","SOWER","REPAY","DIGIT","CRATE","CLUCK",
"SPIKE","MIMIC","POUND","MAXIM","LINEN","UNMET","FLESH","BOOBY",
"FORTH","FIRST","STAND","BELLY","IVORY","SEEDY","PRINT","YEARN",
"DRAIN","BRIBE","STOUT","PANEL","CRASS","FLUME","OFFAL","AGREE",
"ERROR","SWIRL","ARGUE","BLEED","DELTA","FLICK","TOTEM","WOOER",
"FRONT","SHRUB","PARRY","BIOME","LAPEL","START","GREET","GONER",
"GOLEM","LUSTY","LOOPY","ROUND","AUDIT","LYING","GAMMA","LABOR",
"ISLET","CIVIC","FORGE","CORNY","MOULT","BASIC","SALAD","AGATE",
"SPICY","SPRAY","ESSAY","FJORD","SPEND","KEBAB","GUILD","ABACK",
"MOTOR","ALONE","HATCH","HYPER","THUMB","DOWRY","OUGHT","BELCH",
"DUTCH","PILOT","TWEED","COMET","JAUNT","ENEMA","STEED","ABYSS",
"GROWL","FLING","DOZEN","BOOZY","ERODE","WORLD","GOUGE","CLICK",
"BRIAR","GREAT","ALTAR","PULPY","BLURT","COAST","DUCHY","GROIN",
"FIXER","GROUP","ROGUE","BADLY","SMART","PITHY","GAUDY","CHILL",
"HERON","VODKA","FINER","SURER","RADIO","ROUGE","PERCH","RETCH","WROTE",
"CLOCK","TILDE","STORE","PROVE","BRING","SOLVE","CHEAT","GRIME",
"EXULT","USHER","EPOCH","TRIAD","BREAK","RHINO","VIRAL","CONIC",
"MASSE","SONIC","VITAL","TRACE","USING","PEACH","CHAMP","BATON",
"BRAKE","PLUCK","CRAZE","GRIPE","WEARY","PICKY","ACUTE","FERRY",
"ASIDE","TAPIR","TROLL","UNIFY","REBUS","BOOST","TRUSS","SIEGE",
"TIGER","BANAL","SLUMP","CRANK","GORGE","QUERY","DRINK","FAVOR",
"ABBEY","TANGY","PANIC","SOLAR","SHIRE","PROXY","POINT","ROBOT",
"PRICK","WINCE","CRIMP","KNOLL","SUGAR","WHACK","MOUNT","PERKY",
"COULD","WRUNG","LIGHT","THOSE","MOIST","SHARD","PLEAT","ALOFT",
"SKILL","ELDER","FRAME","HUMOR","PAUSE","ULCER","ULTRA","ROBIN",
"CYNIC","AGORA","AROMA","CAULK","SHAKE","PUPAL","DODGE","SWILL",
"TACIT","OTHER", "THORN","TROVE","BLOKE","VIVID",
"SPILL","CHANT","CHOKE","RUPEE","NASTY","MOURN","AHEAD","BRINE",
"CLOTH","HOARD","SWEET","MONTH","LAPSE","WATCH","TODAY","FOCUS",
"SMELT","TEASE","CATER","MOVIE","LYNCH","SAUTE","ALLOW","RENEW",
"THEIR","SLOSH","PURGE","CHEST","DEPOT","EPOXY","NYMPH","FOUND"
]

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