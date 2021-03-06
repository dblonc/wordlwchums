import React from 'react';
import { Link } from 'react-router-dom';
import './daily.css'
import Board from '../board/board'

class DailyPage extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            guessedWord: "",
            usedWords: [],
            isCorrect: false,
            guessNumber: 0,
            isDisabled: false,
            splitWord: [],
            flag: true,
            savedColors: [],
            alreadyWon: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleGuesses = this.handleGuesses.bind(this)
        this.listGuesses = this.listGuesses.bind(this)
        this.winState = this.winState.bind(this) 
        this.letterBackground = this.letterBackground.bind(this)
    }

// Handles letter input and checks to see if what is typed is in the alphabet string.
// it then updates the state to show that set of guessed letters 

    handleChange(e){
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        const lastVar = e.target.value[e.target.value.length - 1]
        if (e.target.value.length === 0 || alphabet.includes(lastVar.toLowerCase()) ){
            this.setState({
                guessedWord: e.target.value
            })
        }
    }

// This sends the word to the backend, saves the word to an array to be displayed
// on the board, and also receives the colors array from the backend to update the 
// background colors of the used words. It increments the guessNumber count and resets
// the guessed word back to an empty string
    handleSubmit(e){
        
        e.preventDefault();
        
        this.props.createGuess(this.state.guessedWord).then( ()=>{
            const newUsedWords = [...this.state.usedWords]
            const newSavedColors = [...this.state.savedColors]
            newUsedWords.push(this.state.guessedWord)
            newSavedColors.push(this.props.isCorrect)
            this.setState({
                guessNumber: this.state.guessNumber + 1,
                splitWord: this.state.guessedWord.toUpperCase().split(""),
                guessedWord: "",
                usedWords: newUsedWords,
                savedColors: newSavedColors,                
            })


        }

        )
    }

//  This changes the input box when it checks to see what numbered guess you are on and if you
//  have already guessed the word. Its functionality will be disabled if these conditions are met
//  Equally, if your guess count is over 6 and the word is not correct, then the loss message appears

    handleGuesses(){
        
        if(this.state.guessNumber < 6 && this.state.isCorrect!==true){
            return(
            <form onSubmit={this.handleSubmit}>
                    <input value={this.state.guessedWord} disabled={(this.state.isDisabled) ? "disabled" : ""} 
                    onChange={this.handleChange} type="text" ></input> 
                    <button disabled={(this.state.isDisabled) ? "disabled" : ""} type="submit" >Submit</button>
            </form>)
        }else if(this.state.guessNumber >= 6 &&  this.state.isCorrect !== true){
            return(
                <h1 className="msg">YOU LOSE!!</h1>
            )
        }
    }


//Functions that handle display and effects
    letterBackground(word, index){
        const letters = word.split("").map((letter, letindex) => {
            return <div className = "tile" key={letindex} style={{ backgroundColor: this.state.savedColors[index][letindex]}}>{letter}</div>
        })
        
        return(
            <div className = "row" key={index}>
                {letters}
            </div>
        )
    }


    listGuesses(){
        return(
            <div className = "list-words">
                {this.state.usedWords.map((word,index)=>{
                    return this.letterBackground(word, index)
                })}
            </div>
        )
    }

    winState(){
        if(this.state.isCorrect === true || this.state.alreadyWon === true){
         
            return(
                <h1 className="msg">YOU WIN!</h1>
            )
        }
    }


    componentDidUpdate(prevProps){
        
        if(this.state.flag === true){
            if (this.props.isCorrect.includes("grey") || this.props.isCorrect.includes("#b59f3b")){
                return 
            }else{
                this.setState({
                    isCorrect: true,
                    isDisabled: true,
                    flag: false,
                    alreadyWon: true
                })
            }
        }else{
            return
        }   
       
    }

    render() {
        return (
            <div>
                <div className="game">
                    <div className="board-container">
                        <div className="boardD">
                            {this.listGuesses()}
                            <Board guessedWord={this.state.guessedWord} 
                                   guessNumber={this.state.guessNumber} />
                            <div className="word-input">
                                {this.handleGuesses()}
                                {this.winState()}
                            </div>

                        </div>
                        <Link className="links" to={'/main'}>Back to main</Link>
                    </div>

                   
                    
                </div>
            </div>
        )
    }

}

export default DailyPage;