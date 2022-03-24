import { Axios } from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import './daily.css'
class DailyPage extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            guessedWord: "",
            currentGuess: [],
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

// Different Handlers for different events

    handleChange(e){
        this.setState({
            guessedWord: e.target.value
        })
    }

    handleSubmit(e){
        
        e.preventDefault();
        
        this.props.createGuess(this.state.guessedWord).then( ()=>{
            const newUsedWords = [...this.state.usedWords]
            const newSavedColors = [...this.state.savedColors]
            newUsedWords.push(this.state.guessedWord)
            newSavedColors.push(this.props.isCorrect)
            let split = this.state.guessedWord.toUpperCase().split()
            this.setState({
                guessNumber: this.state.guessNumber + 1,
                splitWord: this.state.guessedWord.toUpperCase().split(""),
                guessedWord: "",
                usedWords: newUsedWords,
                savedColors: newSavedColors,
                currentGuess: []
                
            })


        }

        )
    }

    handleGuesses(){
        
        if(this.state.guessNumber < 6){
            return(
            <form onSubmit={this.handleSubmit}>
                    <input value={this.state.guessedWord} disabled={(this.state.isDisabled) ? "disabled" : ""} onChange={this.handleChange} type="text" ></input> <button disabled={(this.state.isDisabled) ? "disabled" : ""} type="submit" >Submit</button>
            </form>)
        }else{
            return(
                <h1>YOU LOSE!</h1>
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
                <h1>YOU WIN</h1>
            )
        }
    }

    handleCurrentGuess(){
        // const newGuesses = [...this.state.currentGuess]
        // newGuesses.push(this.state.currentGuess[-1])
        // this.setState({
        //     currentGuess: newGuesses
        // })
    }



    componentDidUpdate(prevProps){
        
        if(this.state.flag === true){
            if (this.props.isCorrect.includes("grey") || this.props.isCorrect.includes("b59f3b")){
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

    render(){
        return(
            <div>
                <div className="game">
                    <div className="board-container">
                        <div className = "board">
                        {this.listGuesses()}
                        <div className= "cur-guess">
                            <div className = "guess-tile">  </div>
                            <div className = "guess-tile">  </div>
                            <div className = "guess-tile">  </div>
                            <div className = "guess-tile">  </div>
                            <div className = "guess-tile">  </div>
                        </div>
                        <div className="word-input">
                            {this.handleGuesses()}
                            {this.winState()}
                        </div>
                                
                        </div>
                    </div>

                    <div>
                        <Link to={'/main'}>Back to main</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default DailyPage;